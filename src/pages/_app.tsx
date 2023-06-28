import '../styles/styles.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import { ThemeContextProvider } from '../context/context'
import { Providers } from '@/components/Providers'
import { Provider } from 'react-redux'
import store from '@/redux/store'
export default function App({ Component, pageProps }: AppProps) {
  // {
  //   children,
  // }: {
  //   children: React.ReactNode
  // }
  return (
    <>
      <Provider store={store}>
        {/* {children} */}
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
