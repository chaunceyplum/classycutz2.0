'use client'

import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
  const [userData, setUserData] = useState()

  return (
    <ThemeContext.Provider value={{ userData, setUserData }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
