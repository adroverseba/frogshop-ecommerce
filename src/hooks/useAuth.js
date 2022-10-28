import axios from 'axios';
import { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie'; //Nos ayuda asignar a nuestro navegador las cookies que esté recibiendo en el momento de la autenticación
import { endPoints } from 'services/api/index';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

//capta la informacion del usuario
function useProvideAuth() {
  const [user, setUser] = useState(null);

  async function signIn(email, password) {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const {
      data: { user, token },
    } = await axios.post(endPoints.auth.login, { email, password }, options);
    if (token) {
      Cookie.set('token', token, { expires: 5 });
      axios.defaults.headers.Authorization = `Bearer ${Cookie.get('token')}`;
      // const { data } = await axios.get(endPoints.profile.getMyOrders);
      setUser(user); //para guardar de manera global la info del usuario
      console.log(user);
      // console.log(data);
    }
  }

  const logOut = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    console.log('logout');
    // window.location.href = '/';
  };

  return {
    user,
    signIn,
    logOut,
  };
}

export const useAuth = () => {
  return useContext(AuthContext);
};
