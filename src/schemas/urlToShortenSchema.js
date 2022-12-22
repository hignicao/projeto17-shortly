import joi from "joi";

export const urlToShortenSchema = joi.object({
	url: joi.string().uri().required(),
});
