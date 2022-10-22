import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/Layout';
import { Login } from '../templates/Login';
import { PasswordRecovery } from '../templates/PasswordRecovery';
import { Home } from '../templates/Home';
import { NotFound } from '../templates/NotFound';
import { SendEmail } from '../templates/SendEmail';
import { NewPassword } from '../templates/NewPassword';
import { MyAccount } from '../templates/MyAccount';
import { CreateAccount } from '../templates/CreateAccount';
import { Checkout } from '../templates/Checkout';
import { Orders } from '../templates/Orders';
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';

import '@styles/global.css';

export const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/signup" element={<CreateAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
