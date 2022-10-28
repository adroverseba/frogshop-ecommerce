import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API);
      setProducts(response.data);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [API]);
  return products;
};
