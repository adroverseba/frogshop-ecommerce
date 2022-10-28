import React, { useContext, useState } from 'react';
import { Menu } from './Menu';
import menu from 'assets/icons/icon_menu.svg';
import logo from '@logos/logo_frogshop.svg';
import ShoppingCart from '@icons/icon_shopping_cart.svg';
import { AppContext } from 'context/AppContext';
import { MyOrder } from 'containers/MyOrder';
import { MobileMenu } from './MobileMenu';
import { useAuth } from 'hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/Header.module.scss';

export const Header = () => {
  const { user } = useAuth();

  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const {
    state: { cart },
  } = useContext(AppContext);

  const handleToggleMenues = (toggleOption) => {
    switch (toggleOption) {
      case 'menu':
        setToggle(!toggle);
        setToggleOrders(false);
        setToggleMobileMenu(false);
        break;
      case 'cart':
        setToggleOrders(!toggleOrders);
        setToggle(false);
        setToggleMobileMenu(false);
        break;
      case 'mobileMenu':
        setToggleMobileMenu(!toggleMobileMenu);
        setToggle(false);
        setToggleOrders(false);
        break;
    }
  };
  return (
    <nav className={styles.Nav}>
      <div className={styles.menu}>
        <Image src={menu} alt="menu" onClick={() => handleToggleMenues('mobileMenu')} />
      </div>
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} width="100%" height="50%" />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']}>
            {user ? (
              <button onClick={() => handleToggleMenues('menu')}>{user?.email}</button>
            ) : (
              <Link href="/login">
                <button className="hover:p-2 ">
                  <span className="text-lg">LogIn</span>
                </button>
              </Link>
            )}
          </li>
          <li className={styles['navbar-shopping-cart']}>
            <button onClick={() => handleToggleMenues('cart')}>
              <Image src={ShoppingCart} alt="shopping cart" />
              {cart.length > 0 && <div>{cart.length}</div>}
            </button>
          </li>
        </ul>
      </div>
      {toggle && <Menu setToggle={setToggle} />}
      {toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
      {toggleMobileMenu && <MobileMenu setToggleMobileMenu={setToggleMobileMenu} />}
    </nav>
  );
};
