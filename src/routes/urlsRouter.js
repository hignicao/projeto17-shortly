import { Router } from "express";
import { shortenUrl } from "../controllers/urlsController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", authValidation, shortenUrl);
urlsRouter.get("urls/:id")


export default urlsRouter;
