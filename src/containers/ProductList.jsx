import { ProductItem } from 'components/ProductItem';
import { useGetProducts } from 'hooks/useGetProducts';
import { endPoints } from 'services/api';
import styles from 'styles/ProductList.module.scss';

//pasamos limit y offset a getProducts, con (0,0) traigo toda la lista
const API = endPoints.products.getProducts(0, 0);

export const ProductList = () => {
  const products = useGetProducts(API);
  // console.log(products);
  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((prod) => (
          <ProductItem product={prod} key={prod.id} />
        ))}
      </div>
    </section>
  );
};
