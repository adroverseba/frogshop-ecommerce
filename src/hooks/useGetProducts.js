import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetProducts = (API, alert) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setProducts(response.data);
      } catch (err) {
        console.log('Error', err.message);
      }
    };
    fetchData();
  }, [API, alert]);
  return products;
};
