import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser } from "../repositories/usersRepository.js";

export async function signUp(req, res) {
	const user = req.locals.user;

	try {
		const hashPassword = bcrypt.hashSync(user.password, 10);
		await createUser({ ...user, password: hashPassword });
		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export async function signIn(req, res) {
	const user = req.locals.user;
	console.log("🚀 ~ file: usersController.js:20 ~ signIn ~ user", user)
	const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT, { expiresIn: 86400 });

	try {
		res.send({ ...user, token: token });
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
