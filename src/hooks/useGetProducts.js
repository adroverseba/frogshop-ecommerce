import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetProducts = (API) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    fetchData();
  }, [API]);
  return Products;
};
