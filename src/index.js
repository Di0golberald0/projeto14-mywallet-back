import { Router } from 'express';
import authRouter from './routes/authRouter.js';
import transferRouter from './routes/transferRouter.js';

const router = Router();
router.use(authRouter);
router.use(transferRouter);

export default router;