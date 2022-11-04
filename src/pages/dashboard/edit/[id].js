import axios from 'axios';
import { FormProduct } from 'components/FormProduct';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { endPoints } from 'services/api';
import { NotFound } from 'templates/NotFound';

const Edit = () => {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return; //para evitar el error 400
    const fetchData = async () => {
      try {
        const { data } = await axios.get(endPoints.products.getProduct(id));
        setProduct(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 404) {
          console.log('error 404');
          setNotFound(true);
        }
      }
    };
    fetchData();
  }, [router?.isReady]);

  return notFound ? <NotFound /> : <FormProduct product={product} />;
};

export default Edit;
