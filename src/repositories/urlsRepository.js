import { connectionDB } from "../database/db.js";

export function postShortUrl(url, shortUrl, id) {
	return connectionDB.query(
    `INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3)`, [url, shortUrl, id]
  );
}

export function findUrlById(id) {
	return connectionDB.query(
    `SELECT * FROM urls WHERE id=$1`,
    [id]
  );
}

export function findUrlByLink(shortUrl) {
  return connectionDB.query(
    `SELECT * FROM urls WHERE "shortUrl"=$1`,
    [shortUrl]
  );
}

export function addOneVisit(id, visitCount) {
  return connectionDB.query(
    `UPDATE urls SET "visitCount"=$1 WHERE id=$2`,
    [visitCount, id]
  );
}

export function deleteUrl(id) {
  return connectionDB.query(
    `DELETE FROM urls WHERE id=$1`,
    [id]
  );
}

export function findUrlOwner(urlId, userId) {
  return connectionDB.query(
    `SELECT * FROM urls WHERE id=$1 AND "userId"=$2`,
    [urlId, userId]
  );
}

export function buildRanking() {
  return connectionDB.query(
    `SELECT
      users.id,
      users.name,
      COUNT(urls.id) AS "linksCount",
      COALESCE(SUM(urls."visitCount"), 0) AS "visitCount"
    FROM users
    LEFT JOIN urls ON users.id=urls."userId"
    GROUP BY users.id
    ORDER BY "visitCount" DESC
    LIMIT 10;`
  );
}