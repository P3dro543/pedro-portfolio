import { useEffect, useLayoutEffect, useState } from 'react'
import { useTheme } from './context/ThemeContext'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Terminal from './components/Terminal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

const sections = ['hero', 'about', 'skills', 'work', 'terminal', 'contact']

export default function App() {
  // Ahora obtenemos t y theme
  const { t, theme } = useTheme()

  const [active, setActive] = useState('hero')

  // Siempre iniciar arriba de la página
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  function scrollTo(id) {
    setActive(id)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    })
  }

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + window.innerHeight / 2

      for (const id of sections) {
        const el = document.getElementById(id)

        if (!el) continue

        const top = el.offsetTop
        const bottom = top + el.offsetHeight

        if (scrollY >= top && scrollY < bottom) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    // Ejecutar una vez al cargar
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      className={theme === 'dark' ? 'dark' : ''}
      style={{
        minHeight: '100vh',
        backgroundColor: t.bg,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Cursor />

      <Navbar active={active} onNav={scrollTo} />

      <main
        style={{
          maxWidth: '768px',
          margin: '0 auto',
        }}
      >
        <section id="hero">
          <Hero onNav={scrollTo} />
        </section>

        <div
          style={{
            height: '1px',
            backgroundColor: t.border,
          }}
        />

        <section id="about">
          <About />
        </section>

        <div
          style={{
            height: '1px',
            backgroundColor: t.border,
          }}
        />

        <section id="skills">
          <Skills />
        </section>

        <div
          style={{
            height: '1px',
            backgroundColor: t.border,
          }}
        />

        <section id="work">
          <Work />
        </section>

        <div
          style={{
            height: '1px',
            backgroundColor: t.border,
          }}
        />

        <section id="terminal">
          <Terminal />
        </section>

        <div
          style={{
            height: '1px',
            backgroundColor: t.border,
          }}
        />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}