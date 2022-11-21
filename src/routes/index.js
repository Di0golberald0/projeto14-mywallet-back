import { Router } from "express";
import authRouter from "./authRouter.js";
import transferRouter from "./transferRouter.js";

const router = Router();
router.use(authRouter);
router.use(transferRouter);

export default router;