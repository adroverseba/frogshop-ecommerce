import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useAlert } from './useAlert';

export const useGetProducts = (API, alert) => {
  const [products, setProducts] = useState([]);
  // const { alert } = useAlert();

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
  }, [API, alert]);
  return products;
};
