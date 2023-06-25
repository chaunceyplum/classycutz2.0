'use client'

import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
  const [data, setData] = useState()

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
