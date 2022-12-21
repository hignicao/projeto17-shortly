import { connectionDB } from "../database/db.js";

export function getUserById(id) {
	return connectionDB.query("SELECT * FROM users WHERE id=$1", [id]);
}

export function getUserByEmail(email) {
	return connectionDB.query("SELECT * FROM users WHERE email=$1", [email]);
}

export function createUser(user) {
	return connectionDB.query(
		"INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
		[user.name, user.email, user.password]
	);
}
