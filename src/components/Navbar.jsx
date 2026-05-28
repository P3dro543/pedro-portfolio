import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang }  from '../context/LangContext'
import { data }     from '../data/content'
import { useState } from 'react'

export default function Navbar({ active, onNav }) {
  const { theme, toggleTheme, t } = useTheme()
  const { lang, toggleLang, tr }  = useLang()
  const [menuOpen, setMenuOpen]   = useState(false)

  const links = [
    { id: 'hero',     label: tr.nav.home     },
    { id: 'about',    label: tr.nav.about    },
    { id: 'skills',   label: tr.nav.skills   },
    { id: 'work',     label: tr.nav.work     },
    { id: 'terminal', label: tr.nav.terminal },
    { id: 'contact',  label: tr.nav.contact  },
  ]

  function handleNav(id) {
    onNav(id)
    setMenuOpen(false)
  }

  const btnStyle = {
    background: 'none',
    border: `1px solid ${t.border}`,
    cursor: 'pointer',
    fontFamily: "'Inter', sans-serif",
    fontSize: '11px',
    padding: '4px 10px',
    borderRadius: '6px',
    color: t.muted,
    transition: 'all 0.15s',
    letterSpacing: '0.3px',
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          height: '56px',
          borderBottom: `1px solid ${t.border}`,
          backgroundColor: t.navBg,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        {/* Logo */}
        <span
          onClick={() => handleNav('hero')}
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '17px',
            color: t.ink,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'color 0.3s ease',
          }}
        >
          {data.name}
        </span>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}
          className="desktop-nav"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                padding: '6px 11px',
                borderRadius: '6px',
                color: active === link.id ? t.ink : t.muted,
                fontWeight: active === link.id ? 500 : 400,
                transition: 'color 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button onClick={toggleLang} style={btnStyle}>{lang === 'en' ? 'ES' : 'EN'}</button>
          <button onClick={toggleTheme} style={btnStyle}>{theme === 'light' ? '◐' : '○'}</button>

          {/* Desktop available */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: t.muted, marginLeft: '4px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', animation: 'pulse 2.5s ease infinite' }} />
            {tr.available}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="mobile-nav"
            style={{
              background: 'none',
              border: `1px solid ${t.border}`,
              borderRadius: '6px',
              padding: '5px 8px',
              cursor: 'pointer',
              color: t.ink,
              fontSize: '14px',
              lineHeight: 1,
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mobile-nav"
          style={{
            position: 'fixed',
            top: '56px',
            left: 0, right: 0,
            zIndex: 49,
            backgroundColor: t.navBg,
            backdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${t.border}`,
            padding: '12px 20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                padding: '10px 8px',
                borderRadius: '8px',
                color: active === link.id ? t.ink : t.muted,
                fontWeight: active === link.id ? 500 : 400,
                textAlign: 'left',
                borderBottom: `1px solid ${t.border}`,
                transition: 'color 0.15s',
              }}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-nav  { display: flex !important; }
        }
        @media (min-width: 641px) {
          .mobile-nav  { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `}</style>
    </>
  )
}