import unittest
import cv2
import numpy as np
from scripts.geometry import resize_intrinsics, colmap_pinhole, undistort, camera_center, project, validate_calibration


class GeometryTests(unittest.TestCase):
    def setUp(self):
        self.K = np.array([[520., 0, 319.5], [0, 530., 239.5], [0, 0, 1]])

    def test_resize_against_actual_opencv_sampling(self):
        # Linear coordinate ramps make cv2.resize's sample locations observable.
        ramp = np.tile(np.arange(640, dtype=np.float32), (480, 1))
        resized = cv2.resize(ramp, (320, 240), interpolation=cv2.INTER_LINEAR)
        np.testing.assert_allclose(resized[100, 1:-1], 2*np.arange(1, 319)+.5)
        K = resize_intrinsics(self.K, (640, 480), (320, 240))
        self.assertEqual(K[0, 2], 159.5)
        self.assertEqual(colmap_pinhole(K), [260., 265., 160., 120.])

    def test_world_camera_and_scale_projection_invariance(self):
        R, _ = cv2.Rodrigues(np.array([.1, -.2, .05]))
        C = np.array([1., 2., -3.])
        t = -R @ C
        X = np.array([[0., 0., 5.], [1., 1., 7.], [-1., 0., 8.]])
        np.testing.assert_allclose(camera_center(R, t), C)
        uv, _ = cv2.projectPoints(X, cv2.Rodrigues(R)[0], t, self.K, np.zeros(5))
        np.testing.assert_allclose(project(X, R, t, self.K), uv.reshape(-1, 2))
        np.testing.assert_allclose(project(X*3.7, R, t*3.7, self.K), uv.reshape(-1, 2))
        np.testing.assert_allclose(camera_center(R, t*3.7), C*3.7)

    def test_fifth_distortion_coefficient_is_preserved(self):
        points = np.array([[[50., 50.]], [[590., 430.]]])
        d = np.array([.02, -.01, .001, -.002, .15])
        corrected = cv2.undistortPointsIter(points, self.K, d, None, self.K,
            (cv2.TERM_CRITERIA_COUNT | cv2.TERM_CRITERIA_EPS, 100, 1e-12))
        norm = np.c_[corrected.reshape(-1, 2), np.ones(2)] @ np.linalg.inv(self.K).T
        projected, _ = cv2.projectPoints(norm, np.zeros(3), np.zeros(3), self.K, d)
        np.testing.assert_allclose(projected, points, atol=1e-7)
        d[4] = 0
        without = cv2.undistortPoints(points, self.K, d, P=self.K)
        self.assertGreater(np.linalg.norm(corrected-without), 1)

    def test_invalid_border_mask(self):
        im = np.full((480, 640, 3), 255, np.uint8)
        out, mask = undistort(im, self.K, np.array([.3, .05, 0, 0, .02]))
        self.assertEqual(out.shape, im.shape)
        self.assertEqual(mask[0, 0], 0)
        self.assertEqual(mask[240, 320], 255)
        self.assertTrue(np.all(out[mask != 0] == 255))

    def test_invalid_calibration_rejected(self):
        data = dict(camera_matrix=self.K.tolist(), distortion_coefficients=[0]*5,
                    image_size_wh=[640,480], distortion_order=['k1','k2','p1','p2','k3'])
        validate_calibration(data)
        for value in (-1, float('nan')):
            data['camera_matrix'][0][0] = value
            with self.assertRaises(ValueError):
                validate_calibration(data)


if __name__ == '__main__':
    unittest.main()
