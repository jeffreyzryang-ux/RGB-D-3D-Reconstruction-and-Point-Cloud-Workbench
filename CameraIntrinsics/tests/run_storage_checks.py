"""Run the app's storage implementation against a synthetic macOS pixel buffer."""
from pathlib import Path
import os
import subprocess
import tempfile
import zipfile
import json

project = Path(__file__).resolve().parents[1]
source = (project / 'CameraIntrinsicsApp.swift').read_text()
store = source[source.index('func captureError'):source.index('final class CameraReader')]
imports = '\n'.join('import ' + name for name in ['Foundation', 'CoreImage', 'CoreVideo', 'ImageIO', 'UniformTypeIdentifiers'])
with tempfile.TemporaryDirectory(prefix='camera-storage-check-') as folder:
    swift = Path(folder) / 'Check.swift'
    swift.write_text(imports + '\n' + store + (Path(__file__).parent / 'StorageChecks.swift').read_text())
    env = dict(os.environ)
    env.setdefault('DEVELOPER_DIR', '/Applications/Xcode.app/Contents/Developer')
    result = subprocess.run(['xcrun', 'swift', '-module-cache-path', folder + '/modules', str(swift)], env=env, check=True, capture_output=True, text=True)
    print(result.stdout)
    archive = next(line[4:] for line in result.stdout.splitlines() if line.startswith('ZIP='))
    with zipfile.ZipFile(archive) as zipped:
        assert zipped.testzip() is None
        names = zipped.namelist()
        assert any(n.endswith('/1/image.jpg') for n in names)
        assert any(n.endswith('/1/calibration.json') for n in names)
        assert any(n.endswith('/2/image.jpg') for n in names)
        assert not any('999' in n for n in names)
    print('PASS: ZIP integrity and complete image/JSON pair')
    next_archive = next(line[9:] for line in result.stdout.splitlines() if line.startswith('NEXT_ZIP='))
    with zipfile.ZipFile(next_archive) as zipped:
        assert zipped.testzip() is None
        names = zipped.namelist()
        assert any(n.endswith('/1/image.jpg') for n in names)
        assert not any('/2/' in n for n in names)
    print('PASS: new batch starts empty and excludes previous photos from ZIP')
    sorted_archive = next(line[11:] for line in result.stdout.splitlines() if line.startswith('SORTED_ZIP='))
    with zipfile.ZipFile(sorted_archive) as ordered, zipfile.ZipFile(archive) as original:
        assert ordered.testzip() is None
        assert ordered.read('Captures/1/image.jpg') == original.read('Captures/2/image.jpg')
        assert ordered.read('Captures/1/calibration.json') == original.read('Captures/2/calibration.json')
        assert ordered.read('Captures/2/calibration.json') == original.read('Captures/1/calibration.json')
        assert json.loads(ordered.read('Captures/1/calibration.json'))['fx'] == 99.0
        assert json.loads(ordered.read('Captures/order.json')) == [
            {'folder': '1', 'original_capture_id': '2'},
            {'folder': '2', 'original_capture_id': '1'}]
    print('PASS: reordered ZIP numbering, unchanged image/metadata pairs and original ID mapping')
    deleted_archive = next(line[12:] for line in result.stdout.splitlines() if line.startswith('DELETED_ZIP='))
    with zipfile.ZipFile(deleted_archive) as zipped:
        assert zipped.testzip() is None
        assert json.loads(zipped.read('Captures/order.json')) == [
            {'folder': '1', 'original_capture_id': '2'},
            {'folder': '2', 'original_capture_id': '3'}]
        assert json.loads(zipped.read('Captures/1/calibration.json'))['fx'] == 99.0
        assert not any('/3/' in name for name in zipped.namelist())
    print('PASS: delete pair, append after delete, contiguous export numbering, delete all and invalid ID rejection')
    depth_archive = next(line[10:] for line in result.stdout.splitlines() if line.startswith('DEPTH_ZIP='))
    with zipfile.ZipFile(depth_archive) as zipped:
        import struct
        assert zipped.testzip() is None
        assert struct.unpack('<6f', zipped.read('Captures/1/depth.f32')) == (0.5, 1.5, 2.5, 3.5, 4.5, 5.5)
        assert zipped.read('Captures/1/confidence.u8') == bytes([0, 1, 2, 0, 1, 2])
        assert json.loads(zipped.read('Captures/1/depth.json'))['units'] == 'meters'
        assert 'Captures/1/image.jpg' in zipped.namelist()
    print('PASS: ZIP includes metric depth, confidence and metadata alongside image')
