const Joi = require('joi');

const name = Joi.string().min(3).max(15).messages({
  'string.empty': `"Title" no puede estar vacio`,
  'string.min': `"Title" debe tener un minimo de {#limit} caracteres`,
});
const price = Joi.number().integer().min(10).messages({
  'number.base': `"Price" debe ser un numero`,
  'number.empty': `"Price" no puede estar vacio`,
  'number.min': `"Price" debe ser mayor o igual a {#limit}`,
});
const description = Joi.string().min(10).messages({
  'string.empty': `"Description" no puede estar vacio`,
  'string.min': `"Description" debe tener {#limit} o mas caracteres`,
});
const categoryId = Joi.number().integer();
const image = Joi.string().uri().messages({
  'string.empty': `"Image url" no puede estar vacio`,
});

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  categoryId: categoryId.required(),
  image: image.required(),
});

module.exports = { createProductSchema };
