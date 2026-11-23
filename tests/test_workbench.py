import io,json,os,tempfile,unittest,zipfile,shutil
from pathlib import Path
os.environ['SLAM_STORAGE']=tempfile.mkdtemp(prefix='slam-test-')
from fastapi.testclient import TestClient
from backend.app import app,validate_source,ROOT,safe_relative
FIXTURE=Path(os.environ.get('SLAM_TEST_CAPTURES', str(ROOT/'Captures4')))
HEAD={'x-workbench':'1'}
class WorkbenchTests(unittest.TestCase):
 def setUp(self):self.client=TestClient(app)
 def batch(self):
  p=self.client.post('/api/projects',json={'name':'测试'},headers=HEAD).json()
  return self.client.post(f"/api/projects/{p['id']}/uploads",json={},headers=HEAD).json()['id']
 def test_paths(self):
  for path in ['../image.jpg','/image.jpg','x/../image.jpg','x\\image.jpg','a/.secret/image.jpg']:
   with self.assertRaises(ValueError):safe_relative(path)
 def test_zip_traversal_and_no_partial_files(self):
  j=self.batch();data=io.BytesIO()
  with zipfile.ZipFile(data,'w') as z:z.writestr('../image.jpg',b'x')
  r=self.client.post(f'/api/uploads/{j}/zip',files={'file':('bad.zip',data.getvalue())},headers=HEAD)
  self.assertEqual(r.status_code,400)
 @unittest.skipUnless(FIXTURE.is_dir(), '需要 Captures4 测试数据或 SLAM_TEST_CAPTURES')
 def test_missing_depth_and_bad_timestamp(self):
  with tempfile.TemporaryDirectory() as tmp:
   dst=Path(tmp)/'captures';shutil.copytree(FIXTURE,dst)
   (dst/'1/depth.f32').write_bytes(b'bad')
   with self.assertRaisesRegex(ValueError,'字节数'):validate_source(dst)
   shutil.copy2(FIXTURE/'1/depth.f32',dst/'1/depth.f32')
   d=json.loads((dst/'1/depth.json').read_text());d['frame_timestamp_seconds']+=1;(dst/'1/depth.json').write_text(json.dumps(d))
   with self.assertRaisesRegex(ValueError,'时间戳'):validate_source(dst)
 def test_csrf_and_cancel(self):
  self.assertEqual(self.client.post('/api/projects',json={'name':'bad'}).status_code,403)
  j=self.batch();r=self.client.post(f'/api/jobs/{j}/cancel',headers=HEAD)
  self.assertEqual(r.json()['status'],'cancelled')
  r=self.client.put(f'/api/uploads/{j}/file',data={'path':'1/image.jpg'},files={'file':('image.jpg',b'a')},headers=HEAD)
  self.assertEqual(r.status_code,409)
 def test_delete_project_and_all_shared_versions(self):
  from backend.app import row, update, jobdir, connect
  first = self.batch()
  project = row(first)['project_id']
  source = jobdir(first) / 'upload'
  (source / 'capture.txt').write_text('fixture')
  update(first, status='succeeded', source=str(source))
  second = self.client.post(f'/api/jobs/{first}/retry', headers=HEAD).json()['id']
  self.assertEqual(self.client.delete(f'/api/projects/{project}', headers=HEAD).status_code, 409)
  update(second, status='succeeded')
  unrelated = self.batch()
  self.assertEqual(self.client.delete(f'/api/projects/{project}').status_code, 403)
  self.assertEqual(self.client.delete(f'/api/projects/{project}', headers=HEAD).status_code, 200)
  for job in [first, second]:
   self.assertFalse(jobdir(job).exists())
   self.assertEqual(self.client.get(f'/api/jobs/{job}').status_code, 404)
  self.assertTrue(jobdir(unrelated).exists())
  self.assertEqual(self.client.get(f'/api/jobs/{unrelated}').status_code, 200)
  self.assertEqual(self.client.delete(f'/api/projects/{project}', headers=HEAD).status_code, 404)

 def test_delete_restores_files_when_staging_fails(self):
  from unittest.mock import patch
  from backend.app import row, update, jobdir
  first = self.batch()
  project = row(first)['project_id']
  update(first, status='succeeded', source=str(jobdir(first) / 'upload'))
  second = self.client.post(f'/api/jobs/{first}/retry', headers=HEAD).json()['id']
  update(second, status='succeeded')
  original_rename = Path.rename
  calls = []
  def fail_second(path, target):
   calls.append(path)
   if len(calls) == 2:
    raise OSError('Simulated storage failure')
   return original_rename(path, target)
  with patch.object(Path, 'rename', fail_second):
   with self.assertRaises(OSError):
    self.client.delete(f'/api/projects/{project}', headers=HEAD)
  for job in [first, second]:
   self.assertTrue(jobdir(job).exists())
   self.assertEqual(self.client.get(f'/api/jobs/{job}').status_code, 200)

 @unittest.skipUnless(FIXTURE.is_dir(), '需要 Captures4 测试数据或 SLAM_TEST_CAPTURES')
 def test_valid_dataset(self):self.assertEqual(validate_source(FIXTURE),12)
if __name__=='__main__':unittest.main()
