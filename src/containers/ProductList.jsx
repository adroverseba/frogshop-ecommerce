import { ProductItem } from 'components/ProductItem';
import { useGetProducts } from 'hooks/useGetProducts';
import { endPoints } from 'services/api';
import styles from 'styles/ProductList.module.scss';

const API = endPoints.products.getProducts;

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
