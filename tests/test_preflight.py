import unittest
import numpy as np
from PIL import Image,ImageOps
from scripts.preflight_images import orientation_matrix,phash

class PreflightTests(unittest.TestCase):
 def test_all_exif_transforms_match_pillow_pixels(self):
  w,h=7,5;pixels=np.arange(w*h,dtype=np.uint8).reshape(h,w)
  for orientation in range(1,9):
   with self.subTest(orientation=orientation):
    image=Image.fromarray(pixels);image.getexif()[274]=orientation
    actual=np.array(ImageOps.exif_transpose(image));M=orientation_matrix(orientation,w,h)
    for y in range(h):
     for x in range(w):
      xx,yy,_=(M@np.array([x,y,1])).astype(int)
      self.assertEqual(actual[yy,xx],pixels[y,x])
 def test_phash_identical_and_bounded(self):
  image=np.random.default_rng(1).integers(0,256,(80,90),dtype=np.uint8)
  self.assertEqual(phash(image),phash(image.copy()))
  self.assertTrue(0<=phash(image)<2**64)
 def test_invalid_orientation_rejected(self):
  with self.assertRaises(ValueError):orientation_matrix(9,7,5)

if __name__=='__main__':unittest.main()
