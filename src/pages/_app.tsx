import '../styles/styles.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import { ThemeContextProvider } from '../context/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}
