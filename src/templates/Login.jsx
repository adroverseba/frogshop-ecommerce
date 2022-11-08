import React, { useRef, useState } from 'react';
import logo from '@logos/logo_frogshop.svg';
import Image from 'next/image';
import styles from 'styles/Login.module.scss';
import Link from 'next/link';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';

export const Login = () => {
  const [errorLogin, setErrorLogin] = useState(null);

  const router = useRouter();
  const { signIn } = useAuth();
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      await signIn(data.username, data.password);
      console.log('login success');
      setErrorLogin(null);
      router.push('/dashboard');
    } catch (error) {
      if (error.response?.status === 401) {
        // console.log(error.response);
        setErrorLogin('Usuario o password incorrecto');
      } else if (error.request) {
        setErrorLogin('Tenemos un problema');
      } else {
        setErrorLogin('Algo salio mal');
      }
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles['Login-container']}>
        <Image src={logo} alt="logo" className={styles['logo-log']} />
        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" name="email" placeholder="name@example.com" className={(styles.input, styles['input-email'])} required />
          <label htmlFor="password" className={styles.label} required>
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={(styles.input, styles['input-password'])} />
          <button className="bg-green-300 rounded-lg p-2 transition ease-in-out delay-100 hover:scale-105 hover:bg-green-400 duration-300 hover:text-white" onClick={handleSubmit}>
            Log in
          </button>
          <div className="my-5 text-warmGray-400 ">
            <Link href="/recovery-password">Forgot my password</Link>
          </div>
        </form>
        <Link href={'/signup'}>
          <button className={(styles['secondary-button'], styles['signup-button'])}>Sign up</button>
        </Link>
        {errorLogin && (
          <div className="p-3 my-1 bg-red-200 rounded-lg text-red-700 text-center ">
            <span className="font-medium">{errorLogin}</span>
          </div>
        )}
      </div>
    </div>
  );
};
