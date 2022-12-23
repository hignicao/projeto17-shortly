import { Router } from "express";
import { deleteShortUrl, getRanking, getUrlById, openShortUrl, shortenUrl } from "../controllers/urlsController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { urlExists } from "../middlewares/urlExistsMiddleware.js";
import { isUserOwner } from "../middlewares/urlOwnerValidationMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", authValidation, shortenUrl);
urlsRouter.get("/urls/:id", urlExists, getUrlById);
urlsRouter.get("/urls/open/:shortUrl", urlExists, openShortUrl);
urlsRouter.delete("/urls/:id", authValidation, urlExists, isUserOwner, deleteShortUrl);
urlsRouter.get("/ranking", getRanking);

export default urlsRouter;
