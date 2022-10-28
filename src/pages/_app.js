import { AppContext } from 'context/AppContext';
import { ProviderAuth } from 'hooks/useAuth';
import { useInitialState } from 'hooks/useInitialState';
import { MainLayout } from 'layout/MainLayout';
import 'styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <ProviderAuth>
      <AppContext.Provider value={initialState}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AppContext.Provider>
    </ProviderAuth>
  );
}

export default MyApp;
