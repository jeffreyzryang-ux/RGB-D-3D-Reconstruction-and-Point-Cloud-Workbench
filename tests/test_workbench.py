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
 @unittest.skipUnless(FIXTURE.is_dir(), '需要 Captures4 测试数据或 SLAM_TEST_CAPTURES')
 def test_valid_dataset(self):self.assertEqual(validate_source(FIXTURE),12)
if __name__=='__main__':unittest.main()
