// import { useState, useEffect } from 'react';
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

// export const getProducts = (API) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(API);
//       setProducts(response.data);
//     };
//     try {
//       fetchData();
//     } catch (error) {
//       console.log(error);
//     }
//   }, [API]);
//   return products;
// };
