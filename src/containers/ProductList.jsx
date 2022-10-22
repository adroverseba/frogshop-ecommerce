import { ProductItem } from 'components/ProductItem';
import { useGetProducts } from 'hooks/useGetProducts';

import styles from 'styles/ProductList.module.scss';

const API = 'https://enigmatic-journey-93971.herokuapp.com/api/v1/products';

export const ProductList = () => {
  const products = useGetProducts(API);

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
