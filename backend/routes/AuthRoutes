import express from 'express';
import { authenticate } from '../middlewares/authmiddlewares.js';
import {
  signup,
  login,
  loggedInUser
  
  
} from '../controllers/AuthController.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/login-user', authenticate,loggedInUser);


export default router