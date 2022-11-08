import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from 'styles/RecoveryPassword.module.scss';
import logos from '@logos/logo_frogshop.svg';
import emailIcon from '@icons/email.svg';

export const RecoveryPassword = () => {
  return (
    <div className={styles.login}>
      <div className={styles['form-container']}>
        <Image src={logos} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
        <div className={styles['email-image']}>
          <Image src={emailIcon} alt="email" />
        </div>
        <Link href={'/login'}>
          <button className="bg-green-300 rounded-lg p-2 transition ease-in-out delay-100 hover:scale-105 hover:bg-green-400 duration-300 hover:text-white">Login</button>
        </Link>
        <p className={styles.resend}>
          <span>Didn`t receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};
