import React from 'react';
import styles from 'styles/MobileMenu.module.scss';
import closeIcon from '@icons/icon_close.png';
import Image from 'next/image';
import Link from 'next/link';

export const MobileMenu = ({ setToggleMobileMenu }) => {
  return (
    <div className={styles.MobileMenu}>
      <div>
        <Image src={closeIcon} alt="close" onClick={() => setToggleMobileMenu(false)} width={25} height={25} layout="fixed" />
      </div>
      <ul>
        <li>
          <Link href="/">CATEGORIES</Link>
        </li>
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
      <hr />
      <ul>
        <li>
          <Link href="/">My Orders</Link>
        </li>
        <li>
          <Link href="/">My Account</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/" className={styles.email}>
            myemail@example.com
          </Link>
        </li>
        <li>
          <Link href="/" className={styles['sign-out']}>
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
};
