import { Router } from 'express';
import { signUp, login, me }  from '../controllers/authController.ts';
import { errorHandler } from '../errorHandler';
import authMiddleware from '../middlewares/auth';

const authRoutes:Router = Router();

authRoutes.post('/sign-up', errorHandler(signUp));
authRoutes.post('/login', errorHandler(login));
authRoutes.get('/me', [authMiddleware], errorHandler(me));

export default authRoutes;