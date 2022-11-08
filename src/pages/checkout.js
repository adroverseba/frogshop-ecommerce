import { OrderItem } from 'components/OrderItem';
import { AppContext } from 'context/AppContext';
import Head from 'next/head';
import { useContext } from 'react';
import styles from 'styles/Checkout.module.scss';

// const order = {
//   id: 1,
//   name: 'Gorgeous Granite Pants',
//   price: 296,
//   description: 'Carbonite web goalkeeper gloves are       ergonomically designed to give easy fit',
//   category: {
//     id: 1,
//     name: 'Clothes',
//     image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=982',
//   },
//   image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=290',
// };

const Checkout = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  const today = new Date().toLocaleString();
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className="text-xl font-bold m-8">My orders</h1>

          {cart.length > 0 ? (
            <div className={styles['Checkout-content']}>
              <div>
                <p>
                  <span>{today}</span>
                  <span>6 articles</span>
                </p>
                <p>$560.00</p>

                {cart.map((prod, i) => (
                  <OrderItem product={prod} key={i} />
                ))}
              </div>
            </div>
          ) : (
            <h3 className="font-bold text-center text-xl">Aun no elegiste ningun producto </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
