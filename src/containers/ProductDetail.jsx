import Image from 'next/image';
import React from 'react';
import { ProductInfo } from 'components/ProductInfo';
import iconClose from 'icons/icon_close.png';
import styles from 'styles/ProductDetail.module.scss';

export const ProductDetail = () => {
  return (
    <aside className={styles.ProductDetail}>
      <div className={styles['ProductDetail-close']}>
        <Image src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
