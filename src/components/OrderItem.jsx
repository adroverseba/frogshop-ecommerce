import React from 'react';
import closeIcon from '@icons/icon_close.png';
import Image from 'next/image';
import styles from 'styles/OrderItem.module.scss';

export const OrderItem = ({ product: { image, name, price }, remove, indexValue }) => {
  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image loader={() => image} src={image} alt={name} width="100%" height="100%" />
      </figure>
      <p>{name}</p>
      <p>${price}</p>
      <Image src={closeIcon} alt="close" onClick={() => remove(indexValue)} />
    </div>
  );
};
