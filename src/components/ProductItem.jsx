import React, { useContext, useState } from 'react';
import { AppContext } from 'context/AppContext';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCart from '@icons/bt_added_to_cart.svg';
import Image from 'next/image';
import styles from 'styles/ProductItem.module.scss';

export const ProductItem = ({ product }) => {
  const { addToCart, state } = useContext(AppContext);
  const [added, setAdded] = useState(false);

  const handleClick = (product) => {
    addToCart(product);
    setAdded(true);
    console.log(state);
  };

  return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.image} src={product.image} alt={product.name} width="100%" height="100%" layout="responsive" />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
        <button href="" onClick={() => handleClick(product)}>
          <figure>{added ? <Image src={addedToCart} alt="" width={40} /> : <Image src={addToCartImage} alt="" />}</figure>
        </button>
      </div>
    </div>
  );
};
