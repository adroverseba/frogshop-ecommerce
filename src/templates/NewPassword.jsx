import { useRef, useState } from 'react';
import logo from '@logos/logo_frogshop.svg';
import styles from 'styles/NewPassword.module.scss';
import Image from 'next/image';
import axios from 'axios';
import { endPoints } from 'services/api';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

export const NewPassword = ({ tokenRecovery }) => {
  const router = useRouter();
  const formRef = useRef(null);
  const [errorFormPass, setErrorFormPass] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorFormPass(null);
    const formData = new FormData(formRef.current);
    const password = formData.get('password');
    const passwordConfirm = formData.get('passwordConfirm');
    if (password != passwordConfirm || password.length < 8) return setErrorFormPass('Las contrasenhas deben ser iguales y tener una longitud minima de 8 caracteres.');
    console.log(password);

    const dataRecovery = {
      token: tokenRecovery,
      newPassword: password,
    };
    const postData = async () => {
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };
      try {
        await axios.post(endPoints.auth.changePassword, dataRecovery, config);

        Swal.fire('Contrasenha restablecida con exito!', '', 'success');
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '',
        });
      }
    };
    postData();
  };

  return (
    <div className={styles.NewPassword}>
      <div className={styles['NewPassword-container']}>
        <Image src={logo} alt="logo" className="logo" />
        <h1 className={styles.title}>Create a new password</h1>
        <p className={styles.subtitle}>Enter a new password for your account</p>
        <form action="/" className={styles.form} ref={formRef}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className={(styles.input, styles['input-password'])} name="password" />
          <label htmlFor="new-password" className={styles.label}>
            Confirm Password
          </label>
          <input type="password" id="new-password" placeholder="*********" className={(styles.input, styles['input-password'])} name="passwordConfirm" />
          <input
            type="submit"
            defaultValue="Confirm"
            className="mt-5 bg-green-300 rounded-lg p-2 transition ease-in-out delay-100 hover:scale-105 hover:bg-green-400 duration-300 hover:text-white"
            onClick={handleSubmit}
          />
          {errorFormPass && <span className="p-3 my-1 bg-red-200  text-red-700 text-center">{errorFormPass}</span>}
        </form>
      </div>
    </div>
  );
};
