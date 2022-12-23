import { nanoid } from "nanoid";
import { addOneVisit, buildRanking, deleteUrl, findUrlById, postShortUrl } from "../repositories/urlsRepository.js";

export async function shortenUrl(req, res) {
	const { url } = req.body;
	const { id } = res.locals.user;
	const shortUrl = nanoid(8);

	try {
		await postShortUrl(url, shortUrl, id);
		res.status(201).send({ shortUrl });
	} catch (error) {
		res.sendStatus(500);
	}
}

export async function getUrlById(req, res) {
	const url = res.locals.url;

	try {
		res.status(200).send(url);
	} catch (error) {
		res.sendStatus(500);
	}
}

export async function openShortUrl(req, res) {
	const { id, url, visitCount } = res.locals.url;

	try {
		await addOneVisit(id, visitCount + 1);
		res.redirect(url);
	} catch (error) {
		res.sendStatus(500);
	}
}

export async function deleteShortUrl(req, res) {
	const url = res.locals.url;

	try {
		await deleteUrl(url.id);
		res.sendStatus(204);
	} catch (error) {
		res.sendStatus(500);
	}
}

export async function getRanking(req, res) {
	try {
		const ranking = await buildRanking();
		res.status(200).send(ranking.rows);
	} catch (error) {
		res.sendStatus(500);
	}
}
