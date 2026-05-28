import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang }  from '../context/LangContext'
import { data } from '../data/content'

export default function Navbar({ active, onNav }) {
  const { theme, toggleTheme, t } = useTheme()
  const { lang, toggleLang, tr }  = useLang()

  const links = [
    { id: 'hero',     label: tr.nav.home     },
    { id: 'about',    label: tr.nav.about    },
    { id: 'skills',   label: tr.nav.skills   },
    { id: 'work',     label: tr.nav.work     },
    { id: 'terminal', label: tr.nav.terminal },
    { id: 'contact',  label: tr.nav.contact  },
  ]

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
        padding: '0 36px',
        height: '56px',
        borderBottom: `1px solid ${t.border}`,
        backgroundColor: t.navBg,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <span
        onClick={() => onNav('hero')}
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: '19px',
          color: t.ink,
          cursor: 'pointer',
          transition: 'color 0.3s ease',
        }}
      >
        {data.name}
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onNav(link.id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              padding: '6px 13px',
              borderRadius: '6px',
              color: active === link.id ? t.ink : t.muted,
              fontWeight: active === link.id ? 500 : 400,
              transition: 'color 0.15s',
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Toggle idioma */}
        <button onClick={toggleLang} style={btnStyle}>
          {lang === 'en' ? 'ES' : 'EN'}
        </button>

        {/* Toggle tema */}
        <button onClick={toggleTheme} style={btnStyle}>
          {theme === 'light' ? '◐' : '○'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: t.muted, marginLeft: '4px' }}>
          <span style={{
            display: 'inline-block',
            width: '6px', height: '6px',
            borderRadius: '50%',
            backgroundColor: '#22c55e',
            animation: 'pulse 2.5s ease infinite',
          }} />
          {tr.available}
        </div>
      </div>
    </motion.nav>
  )
}