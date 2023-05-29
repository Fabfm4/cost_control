import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {store} from '../reduxToolkits/store';
import { Provider } from 'react-redux';
import AuthProvider from '@/components/helpers/AuthProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}
