import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { schemaValidationMiddleware } from '../middlewares/schemaValidationMiddleware.js';

const authRouter = Router();
authRouter.post("/sign-up", schemaValidationMiddleware, signUp);
authRouter.post("/sign-in", signIn);
export default authRouter;