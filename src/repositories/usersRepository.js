import { connectionDB } from "../database/db.js";

export function getUserById(id) {
	return connectionDB.query(`SELECT * FROM users WHERE id=$1`, [id]);
}

export function getUserByEmail(email) {
	return connectionDB.query(`SELECT * FROM users WHERE email=$1`, [email]);
}

export function createUser(user) {
	return connectionDB.query(
		`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
		[user.name, user.email, user.password]
	);
}

export function getMyLinks(id) {
	return connectionDB.query(
		`SELECT
			users.id,
			users.name,
			SUM(urls."visitCount") AS "visitCount",
			JSON_AGG(
				JSON_BUILD_OBJECT(
					'id', urls.id,
			 	 	'shortUrl', urls."shortUrl",
			   	'url', urls.url,
			  	'visitCount', urls."visitCount"
				)
			) AS "shortenedUrls"
		FROM urls
		JOIN users ON users.id=urls."userId"
		WHERE users.id = $1
		GROUP BY users.id`,
		[id]
	);
}