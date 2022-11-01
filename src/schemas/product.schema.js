const Joi = require('joi');

const name = Joi.string().min(3).max(15).messages({
  'string.empty': `el campo Title no puede estar vacio`,
});
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  categoryId: categoryId.required(),
  image: image.required(),
});

module.exports = { createProductSchema };
