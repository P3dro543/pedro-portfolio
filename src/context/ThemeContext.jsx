import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const themes = {
  light: {
    bg:      '#fafaf8',
    bg2:     '#ffffff',
    ink:     '#0f0f0e',
    muted:   '#7a7a74',
    hint:    '#b8b8b2',
    border:  '#e4e4de',
    navBg:   'rgba(250, 250, 248, 0.92)',
  },
  dark: {
    bg:      '#111110',
    bg2:     '#1a1a18',
    ink:     '#f0f0ee',
    muted:   '#8a8a82',
    hint:    '#4a4a44',
    border:  '#2a2a26',
    navBg:   'rgba(17, 17, 16, 0.92)',
  },
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme(t => t === 'light' ? 'dark' : 'light')
  }

  const t = themes[theme]

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, t }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}