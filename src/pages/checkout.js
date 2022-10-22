import React from 'react';
import { OrderItem } from 'components/OrderItem';
import styles from 'styles/Checkout.module.scss';

const order = {
  id: 1,
  name: 'Gorgeous Granite Pants',
  price: 296,
  description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  category: {
    id: 1,
    name: 'Clothes',
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=982',
  },
  image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=290',
};

const Checkout = () => {
  return (
    <div className={styles.Checkout}>
      <div className={styles['Checkout-container']}>
        <h1 className={styles.title}>My orders</h1>
        <div className={styles['Checkout-content']}>
          <div className={styles.order}>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem product={order} />
      </div>
    </div>
  );
};

export default Checkout;
