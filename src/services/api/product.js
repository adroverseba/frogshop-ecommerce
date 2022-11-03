import axios from 'axios';
import { endPoints } from '.';

export const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axios.post(endPoints.products.createProduct, body, config);
  return data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};
