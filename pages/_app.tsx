import type { AppProps } from 'next/app'
import 'bootswatch/dist/lux/bootstrap.min.css'
import  '../styles/globals.css';
import  '../styles/sassStyles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
