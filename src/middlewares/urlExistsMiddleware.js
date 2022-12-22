import { findUrlById, findUrlByLink } from "../repositories/urlsRepository.js";

export async function urlExists(req, res, next) {
	const { id, shortUrl } = req.params;

	if (id) {
		const urlById = await findUrlById(id);

		if (urlById.rowCount === 0) {
			return res.status(404).send("Url not found");
		}

		delete urlById.rows[0].visitCount;
		delete urlById.rows[0].userId;
		delete urlById.rows[0].createdAt;

		res.locals.url = urlById.rows[0];

	} else if (shortUrl) {
		const urlByLink = await findUrlByLink(shortUrl);

		if (urlByLink.rowCount === 0) {
			return res.status(404).send("Url not found");
		}

		delete urlByLink.rows[0].visitCount;
		delete urlByLink.rows[0].userId;
		delete urlByLink.rows[0].createdAt;

		res.locals.url = urlByLink.rows[0];
	}

	next();
}
