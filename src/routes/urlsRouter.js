import { Router } from "express";
import { getUrlById, openShortUrl, shortenUrl } from "../controllers/urlsController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { urlExists } from "../middlewares/urlExistsMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", authValidation, shortenUrl);
urlsRouter.get("/urls/:id", urlExists, getUrlById);
urlsRouter.get("/urls/open/:shortUrl", urlExists, openShortUrl);

export default urlsRouter;
