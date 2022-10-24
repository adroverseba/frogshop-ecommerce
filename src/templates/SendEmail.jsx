import React from 'react';
import logos from '@logos/logo_frogshop.svg';
import iconMessage from '@icons/email.svg';
import styles from 'styles/SendEmail.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <Image src={logos} alt="logo" className={styles.logo} />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-image">
          <Image src={iconMessage} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn`t receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};
