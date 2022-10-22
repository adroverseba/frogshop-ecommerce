import React from 'react';
import styles from 'styles/MobileMenu.module.scss';
import closeIcon from '@icons/icon_close.png';
import Image from 'next/image';

export const MobileMenu = ({ setToggleMobileMenu }) => {
  return (
    <div className={styles.MobileMenu}>
      <Image src={closeIcon} alt="close" onClick={() => setToggleMobileMenu(false)} width={25} height={25} layout="fixed" />
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
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
      <hr />
      <ul>
        <li>
          <a href="/">My Orders</a>
        </li>
        <li>
          <a href="/">My Account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/" className={styles.email}>
            myemail@example.com
          </a>
        </li>
        <li>
          <a href="/" className={styles['sign-out']}>
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
};
