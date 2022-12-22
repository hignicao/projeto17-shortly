import { connectionDB } from "../database/db.js";

export function postShortUrl(url, shortUrl, id) {
  return connectionDB.query(
    `INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3)`,
    [url, shortUrl, id]
  );
}