import { Router } from 'express';
import { transferAdded, transfersListed } from '../controllers/transferController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { transferMiddleware } from '../middlewares/transferMiddleware.js';

const transferRouter = Router();
transferRouter.post('/transfer', authMiddleware, transferMiddleware, transferAdded);
transferRouter.get('/transfer', authMiddleware, transfersListed);

export default transferRouter;