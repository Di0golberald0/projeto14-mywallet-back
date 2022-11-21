import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { userMiddleware } from '../middlewares/userMiddleware.js';

const authRouter = Router();
authRouter.post('/sign-up', userMiddleware, signUp);
authRouter.post('/sign-in', signIn);
export default authRouter;