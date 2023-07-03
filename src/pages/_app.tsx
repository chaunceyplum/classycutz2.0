import '../styles/styles.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import { ThemeContextProvider } from '../context/context'
import { Providers } from '@/components/Providers'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { Layout } from '@/components/Layout'
import type { NextPage } from 'next'
// import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // {
  //   children,
  // }: {
  //   children: React.ReactNode
  // }
  return (
    <Provider store={store}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </Provider>
  )
}
