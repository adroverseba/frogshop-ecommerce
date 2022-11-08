const Joi = require('joi');

const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });

const password = Joi.string();

const role = Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

module.exports = { createUserSchema };
