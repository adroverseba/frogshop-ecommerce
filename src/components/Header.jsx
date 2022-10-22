import React, { useContext, useState } from 'react';
import styles from 'styles/Header.module.scss';

import { Menu } from './Menu';
import menu from 'assets/icons/icon_menu.svg';
import logo from '@logos/logo_frogshop.svg';
import ShoppingCart from '@icons/icon_shopping_cart.svg';
import { AppContext } from 'context/AppContext';
import { MyOrder } from 'containers/MyOrder';
import { MobileMenu } from './MobileMenu';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
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
      <Image src={menu} alt="menu" className={styles.menu} onClick={() => handleToggleMenues('mobileMenu')} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} width="100%" height="50%" />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={() => handleToggleMenues('menu')}>
            user@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => handleToggleMenues('cart')}>
            <Image src={ShoppingCart} alt="shopping cart" />
            {cart.length > 0 && <div>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
      {toggleMobileMenu && <MobileMenu setToggleMobileMenu={setToggleMobileMenu} />}
    </nav>
  );
};
