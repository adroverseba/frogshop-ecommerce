import React, { useRef } from 'react';
import logo from '@logos/logo_frogshop.svg';
import Image from 'next/image';
import styles from 'styles/Login.module.scss';
import Link from 'next/link';

export const Login = () => {
  const form = useRef(null);
  const letraRoja = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className={styles.Login}>
      <div className={styles['Login-container']}>
        <Image src={logo} alt="logo" className={styles['logo-log']} />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label" ref={letraRoja}>
            Email address
          </label>
          <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={(styles.input, styles['input-password'])} />
          <button className={(styles['primary-button'], styles['login-button'])} onClick={handleSubmit}>
            Log in
          </button>
          <Link href="/">Forgot my password</Link>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};
