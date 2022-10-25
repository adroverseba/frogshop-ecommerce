import React, { useRef } from 'react';
import logo from '@logos/logo_frogshop.svg';
import Image from 'next/image';
import styles from 'styles/Login.module.scss';
import Link from 'next/link';

export const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className={styles.Login}>
      <div className={styles['Login-container']}>
        <Image src={logo} alt="logo" className={styles['logo-log']} />
        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" name="email" placeholder="platzi@example.cm" className={(styles.input, styles['input-email'])} />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={(styles.input, styles['input-password'])} />
          <button className="bg-green-300 rounded-lg p-2 transition ease-in-out delay-100 hover:scale-105 hover:bg-green-400 duration-300 hover:text-white" onClick={handleSubmit}>
            Log in
          </button>
          <div className="my-5 text-warmGray-400 ">
            <Link href="/">Forgot my password</Link>
          </div>
        </form>
        <button className={(styles['secondary-button'], styles['signup-button'])}>Sign up</button>
      </div>
    </div>
  );
};
