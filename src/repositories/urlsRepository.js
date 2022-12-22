import { connectionDB } from "../database/db.js";

export function postShortUrl(url, shortUrl, id) {
	return connectionDB.query(`INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3)`, [url, shortUrl, id]);
}

export function findUrlById(id) {
	return connectionDB.query(`SELECT * FROM urls WHERE id=$1`, [id]);
}

export function findUrlByLink(shortUrl) {
  return connectionDB.query(`SELECT * FROM urls WHERE "shortUrl"=$1`, [shortUrl]);
}