import React, { useRef } from 'react';
import Image from 'next/image';
import logo from 'assets/logos/logo_frogshop.svg';
import styles from 'styles/PasswordRecovery.module.scss';
import { recoveryPassword } from 'services/api/user';
import { useRouter } from 'next/router';

const PasswordRecovery = () => {
  const formRef = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    console.log(email);
    try {
      await recoveryPassword({ email });
      console.log('correo enviado exitosamente');
      router.push('/recovery-password/mail-send');
    } catch (error) {
      //
    }
  };

  return (
    <div className={styles.PasswordRecovery}>
      <div className={styles['PasswordRecovery-container']}>
        <Image src={logo} alt="logo" width={'350px'} className={styles.logo} />
        <h1 className="font-bold text-center text-xl mb-8">Password recovery</h1>
        <p className="mb-2 text-center text-gray-500">Inform the email address used to create your account</p>
        <form action="/" className={styles.form} ref={formRef}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" id="email" className="border-slate-200 shadow-md rounded-sm h-12" name="email" />
          <input type="submit" value="Confirm" className="rounded-md font-bold  border-none mt-5 bg-[#acd9b2] h-12" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
