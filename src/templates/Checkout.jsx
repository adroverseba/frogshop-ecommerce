import React from 'react';
import { OrderItem } from 'components/OrderItem';
import Image from 'next/image';

export const Checkout = () => {
  return (
    <div className={'Checkout'}>
      <div className="Checkout-container">
        <h1 className="title">My orders</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <Image src="./icons/flechita.svg" alt="arrow" />
          </div>
        </div>
        <OrderItem />
      </div>
    </div>
  );
};
