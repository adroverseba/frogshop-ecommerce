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

  const handlePurchase = () => {
    alert('boton comprar');
  };

  const total = cart.reduce((acc, { price }) => acc + price, 0);
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
                <p className="flex justify-between">
                  <span className="text-gray-500 ">{today}</span>
                  <span className="font-bold ">{cart.length} articles</span>
                </p>
                <p className=" flex justify-between mb-10">
                  <span className="font-bold">total</span>
                  <span className="font-bold">${total}</span>
                </p>

                {cart.map((prod, i) => (
                  <OrderItem product={prod} key={i} />
                ))}
              </div>
              <button className="bg-green-300 p-2 rounded-md hover:scale-105 delay-100 ease-in-out hover:bg-green-400 duration-300 hover:text-white" onClick={() => handlePurchase()}>
                Comprar
              </button>
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
