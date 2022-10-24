import React from 'react';
import logos from '@logos/logo_frogshop.svg';
import iconMessage from '@icons/email.svg';
import Link from 'next/link';
import Image from 'next/image';

import styles from 'styles/PasswordRecovery.module.scss';

export const PasswordRecovery = () => {
  return (
    <div className={styles.PasswordRecovery}>
      <div className={styles['form-container']}>
        <Image src={logos} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className={styles['email-image']}>
          <Image src={iconMessage} alt="email" />
        </div>
        <button className={(styles['primary-button'], styles['login-button'])}>Login</button>
        <p className="resend">
          <span>Didn`t receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};
