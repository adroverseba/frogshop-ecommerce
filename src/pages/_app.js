import { AppContext } from 'context/AppContext';
import { useInitialState } from 'hooks/useInitialState';
import { MainLayout } from 'layout/MainLayout';
import 'styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppContext.Provider>
  );
}

export default MyApp;
