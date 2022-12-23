import { findUrlOwner } from "../repositories/urlsRepository.js"

export async function isUserOwner(req, res, next) {
  const user = res.locals.user
  const url = res.locals.url

  const urlHasOwner = await findUrlOwner(url.id, user.id)

  if(urlHasOwner.rowCount === 0) {
    return res.sendStatus(401);
  }

  next()
}