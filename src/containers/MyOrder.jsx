import React, { useContext } from 'react';
import { OrderItem } from 'components/OrderItem';
import { AppContext } from 'context/AppContext';

import arrowIcon from '@icons/flechita.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/MyOrder.module.scss';

export const MyOrder = ({ setToggleOrders }) => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  //i usado para el contador del componente
  let i = 0;

  const sumTotal = cart.reduce((acc, { price }) => acc + price, 0);

  return (
    <aside className={styles.MyOrder}>
      <div className="title-container">
        <Image src={arrowIcon} alt="arrow" onClick={() => setToggleOrders(false)} />
        <p className="title">My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {cart.map((prod, index) => (
          <OrderItem product={prod} remove={removeFromCart} key={++i} indexValue={index} />
        ))}
      </div>
      <div className={styles.order}>
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal}</p>
      </div>
      <Link href="/checkout">
        <button className={styles['primary-button']}>Checkout</button>
      </Link>
    </aside>
  );
};
