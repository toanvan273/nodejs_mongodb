import express from 'express';
import {body } from 'express-validator'
import { userController } from '../controllers/index.js'
const router = express.Router();

router.get('/',userController.getDetailUser);
router.post('/login',
    body('email').isEmail(),
    body('password').optional().isLength({ min: 6 }),
   userController.login
)
router.post('/register',userController.register)

export default router