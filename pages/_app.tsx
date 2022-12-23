import type { AppProps } from 'next/app'
import 'bootswatch/dist/lux/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
