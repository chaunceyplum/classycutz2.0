import { ThemeContextProvider } from '@/context/context'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}
