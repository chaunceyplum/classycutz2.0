import '../styles/styles.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import { ThemeContextProvider } from '../context/context'
import { Providers } from '@/components/Providers'

export default function App(
  { Component, pageProps }: AppProps,
  {
    children,
  }: {
    children: React.ReactNode
  }
) {
  return (
    <>
      <Providers>
        {children}
        <Component {...pageProps} />
      </Providers>
    </>
  )
}
