import axios from 'axios';
import { Alert } from 'common/Alert';
import { FormProduct } from 'components/FormProduct';
import { useAlert } from 'hooks/useAlert';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { endPoints } from 'services/api';
import { NotFound } from 'templates/NotFound';

const Edit = () => {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { alert, setAlert, toggleAlert } = useAlert();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return; //para evitar el error 400
    const fetchData = async () => {
      try {
        const { data } = await axios.get(endPoints.products.getProduct(id));
        setProduct(data);
      } catch (error) {
        if (error.response.status === 404) {
          console.log('error 404');
          setNotFound(true);
        } else {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [router?.isReady]);

  return notFound ? (
    <NotFound />
  ) : (
    <>
      <Alert alert={alert} handleClose={toggleAlert} /> <FormProduct product={product} setAlert={setAlert} setOpen={setOpen} open={open} />
    </>
  );
};

export default Edit;
