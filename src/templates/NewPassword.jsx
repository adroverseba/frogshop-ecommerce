import React from 'react';
import logo from '@logos/logo_frogshop.svg';
import styles from 'styles/NewPassword.module.scss';
import Image from 'next/image';

export const NewPassword = () => {
  return (
    <div className={styles.NewPassword}>
      <div className={styles['NewPassword-container']}>
        <Image src={logo} alt="logo" className="logo" />
        <h1 className={styles.title}>Create a new password</h1>
        <p className={styles.subtitle}>Enter a new password for your account</p>
        <form action="/" className={styles.form}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className={(styles.input, styles['input-password'])} />
          <label htmlFor="new-password" className={styles.label}>
            Password
          </label>
          <input type="password" id="new-password" placeholder="*********" className={(styles.input, styles['input-password'])} />
          <input type="submit" defaultValue="Confirm" className={(styles['primary-button'], styles['login-button'])} />
        </form>
      </div>
    </div>
  );
};
