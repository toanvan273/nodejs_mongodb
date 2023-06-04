import express from 'express'
import { studentController } from '../controllers/index.js'

const router = express.Router();

router.get('/',studentController.getAllStudents)
// get student by ID
router.get('/:id',studentController.getStudentByID)
// put or patch
router.patch('/',studentController.updateStudent)
router.post('/',studentController.insertStudent)
// router.post('/generateFakerStudent',studentController.generateFakerStudent)

export default router