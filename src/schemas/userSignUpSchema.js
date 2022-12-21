import joi from "joi";

export const userSignUpSchema = joi.object({
	name: joi.string().required().min(3),
	email: joi.string().email().required(),
	password: joi.string().required(),
	confirmPassword: joi.string().equal(joi.ref("password")).required().label("Confirm password").messages({ "any.only": "{{#label}} does not match" }),
});
