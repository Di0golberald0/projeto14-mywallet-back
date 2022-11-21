import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const authRouter = Router();
authRouter.post("/sign-up", authMiddleware, signUp);
authRouter.post("/sign-in", signIn);
export default authRouter;