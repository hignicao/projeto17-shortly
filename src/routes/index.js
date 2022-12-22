import { Router } from "express";
import urlsRouter from "./urlsRouter.js";
import usersRouter from "./usersRouter.js";

const router = Router();
router.use(usersRouter);
router.use(urlsRouter)

export default router;
