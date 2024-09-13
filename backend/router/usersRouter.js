import express from 'express';
import { studentSignIn, teacherSignIn, adminSignIn } from '../controllers/usersController.js'; // Ensure correct path and imports

const router = express.Router();

router.post('/student/signin', studentSignIn);
router.post('/teacher/signin', teacherSignIn);
router.post('/admin/signin', adminSignIn); // Uncommented and added

export default router;
