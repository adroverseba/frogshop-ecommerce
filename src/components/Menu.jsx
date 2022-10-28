import { useAuth } from 'hooks/useAuth';
import Link from 'next/link';
import React from 'react';
import styles from 'styles/Menu.module.scss';

export const Menu = ({ setToggle }) => {
  const { logOut } = useAuth();

  const handleSignOut = () => {
    setToggle(false);
    logOut();
  };
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/" className="title">
            My orders
          </Link>
        </li>
        <li>
          <Link href="/">My account</Link>
        </li>
        <li>
          <Link href="/login">
            <button onClick={() => handleSignOut()}>Sign out</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
