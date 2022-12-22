import { nanoid } from 'nanoid'
import { findUrlById, postShortUrl } from '../repositories/urlsRepository.js';

export async function shortenUrl(req, res) {
  const { url } = req.body;
  const { id } = res.locals.user
  const shortUrl = nanoid(8)

  try {
    await postShortUrl(url, shortUrl, id)
    res.status(201).send({ shortUrl })
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function getUrlById(req, res) {
  const url = res.locals.url

  try {
    res.status(200).send(url)
  } catch (error) {
    res.sendStatus(500)
  }
}
