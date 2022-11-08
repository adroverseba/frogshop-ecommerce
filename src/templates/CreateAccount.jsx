import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { createUserSchema } from 'schemas/user.schema';
import { addUser } from 'services/api/user';
import styles from 'styles/CreateAccount.module.scss';
const Swal = require('sweetalert2');

export const CreateAccount = () => {
  const router = useRouter();
  const formRef = useRef(null);
  const [errorFormUser, setErrorFormUser] = useState([]);
  const [errorLogin, setErrorLogin] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    const password = formData.get('password');
    const role = formData.get('role');
    const user = {
      email,
      password,
      role,
    };
    console.log(user);

    //validation joi error
    const { error } = createUserSchema.validate(user, { abortEarly: false });

    if (error) {
      const errorFormValidation = error.details.map((err) => err.message);
      return setErrorFormUser(errorFormValidation);
    }

    try {
      await addUser(user);
      console.log('signup success');
      Swal.fire('Cuenta creada con exito', '', 'success');
      router.push('/login');
    } catch (error) {
      if (error.response?.status === 409) {
        setErrorLogin('El email ingresado ya existe');
      } else if (error.response?.status == 400) {
        console.log('aca estoy 400');
        setErrorLogin(error.response?.data.message);
      } else {
        setErrorLogin(error.response.status);
      }
      console.log(error.response);
    }
  };

  return (
    <div className={styles.CreateAccount}>
      <div className={styles['CreateAccount-container']}>
        <h1 className="text-lg font-bold text-center mb-7">My account</h1>
        <form action="/" className={styles.form} ref={formRef}>
          <div>
            {/* <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input type="text" id="name" placeholder="your name" className={(styles.input, styles['input-name'])} /> */}
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="text" id="email" name="email" placeholder="user@example.com" className={(styles.input, styles['input-email'])} />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input type="password" id="password" name="password" placeholder="*********" className={(styles.input, styles['input-password'])} />
            <label htmlFor="role" className="font-bold">
              Selecciona tu role
            </label>
            <select name="role" id="role" defaultValue={'customer'} className="mb-3 focus:outline-none">
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <ul>
            {errorFormUser.map((errM, i) => {
              <li className="text-red-700 " key={i}>
                {errM}
              </li>;
            })}
          </ul>

          <input type="submit" defaultValue="Create" className="font-bold rounded-md bg-[#acd9b2] h-12" onClick={handleSubmit} />
          {/* <p>Hola mundo</p> */}
          {errorFormUser.length > 0 && (
            <ul className=" bg-red-50 rounded-md px-2 mt-3 list-disc">
              {errorFormUser.map((errM, i) => (
                <li key={i} className="text-red-700 ">
                  {errM}
                </li>
              ))}
            </ul>
          )}
        </form>
        {errorLogin && (
          <div className="p-3 my-1 bg-red-200 rounded-lg text-red-700 text-center">
            <span className="font-medium">{errorLogin}</span>
          </div>
        )}
      </div>
    </div>
  );
};
