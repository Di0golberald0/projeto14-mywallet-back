import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { userMiddleware } from '../middlewares/userMiddleware.js';

const authRouter = Router();
authRouter.post('/sign-up', userMiddleware, signUp);
authRouter.post('/sign-in', authMiddleware, signIn);
export default authRouter;