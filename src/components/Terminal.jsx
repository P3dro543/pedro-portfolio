import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'

const PROMPT = 'pedro ~ %'

export default function Terminal() {
  const { t } = useTheme()
  const { tr, lang } = useLang()

  const commands = {
    help: tr.cmdHelp,
    about: tr.cmdAbout,
    skills: tr.cmdSkills,
    projects: tr.cmdProjects,
    contact: tr.cmdContact,
  }

  const [lines, setLines] = useState([
    { type: 'dim', text: tr.termWelcome },
    { type: 'dim', text: tr.termHelp },
    { type: 'dim', text: '' },
  ])

  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const outputRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll SOLO dentro de la terminal
  useEffect(() => {
    const container = outputRef.current

    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [lines])

  // Reset terminal when language changes
  useEffect(() => {
    setLines([
      { type: 'dim', text: tr.termWelcome },
      { type: 'dim', text: tr.termHelp },
      { type: 'dim', text: '' },
    ])
  }, [lang])

  function runCmd(raw) {
    const cmd = raw.trim().toLowerCase()

    if (!cmd) return

    const next = [
      ...lines,
      {
        type: 'cmd',
        text: `${PROMPT} ${cmd}`,
      },
    ]

    if (cmd === 'clear') {
      setLines([])
    } else if (commands[cmd]) {
      setLines([
        ...next,
        ...commands[cmd].map((t) => ({
          type: t === '' ? 'dim' : 'res',
          text: t,
        })),
        { type: 'dim', text: '' },
      ])
    } else {
      setLines([
        ...next,
        {
          type: 'err',
          text: `${tr.cmdNotFound} ${cmd}`,
        },
        { type: 'dim', text: '' },
      ])
    }

    setHistory((h) => [cmd, ...h])
    setHistoryIndex(-1)
    setInput('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      runCmd(input)
    }

    else if (e.key === 'ArrowUp') {
      e.preventDefault()

      const next = Math.min(
        historyIndex + 1,
        history.length - 1
      )

      setHistoryIndex(next)
      setInput(history[next] ?? '')
    }

    else if (e.key === 'ArrowDown') {
      e.preventDefault()

      const next = Math.max(
        historyIndex - 1,
        -1
      )

      setHistoryIndex(next)
      setInput(next === -1 ? '' : history[next])
    }
  }

  return (
    <section
      style={{
        padding: '56px 36px 48px',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '30px',
            color: t.ink,
            letterSpacing: '-0.3px',
            transition: 'color 0.3s ease',
          }}
        >
          {tr.termTitle}
        </h2>

        <span
          style={{
            fontSize: '12px',
            color: t.hint,
            transition: 'color 0.3s ease',
          }}
        >
          {tr.termSub}
        </span>
      </motion.div>

      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        onClick={() => inputRef.current?.focus()}
        style={{
          backgroundColor: t.bg2,
          border: `1px solid ${t.border}`,
          borderRadius: '18px',
          overflow: 'hidden',
          transition:
            'background-color 0.3s ease, border-color 0.3s ease',
          boxShadow:
            themeShadow(t),
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 18px',
            borderBottom: `1px solid ${t.border}`,
            backgroundColor: t.bg,
            position: 'relative',
            transition:
              'background-color 0.3s ease, border-color 0.3s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '6px',
              zIndex: 1,
            }}
          >
            <div style={circle('#ff5f57')} />
            <div style={circle('#febc2e')} />
            <div style={circle('#28c840')} />
          </div>

          <span
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '12px',
              color: t.hint,
              fontFamily: "'Fira Code', monospace",
              letterSpacing: '0.2px',
              transition: 'color 0.3s ease',
            }}
          >
            pedro@portfolio — zsh
          </span>
        </div>

        {/* Output */}
        <div
          ref={outputRef}
          style={{
            padding: '20px 24px',
            minHeight: '280px',
            maxHeight: '360px',
            overflowY: 'auto',
            fontFamily: "'Fira Code', monospace",
            fontSize: '13px',
            backgroundColor: t.bg2,
            transition: 'background-color 0.3s ease',
          }}
        >
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                lineHeight: 1.9,
                whiteSpace: 'pre-wrap',
                color:
                  line.type === 'cmd'
                    ? t.ink
                    : line.type === 'err'
                    ? '#f87171'
                    : line.type === 'dim'
                    ? t.hint
                    : t.muted,
                fontWeight:
                  line.type === 'cmd'
                    ? 500
                    : 400,
                transition: 'color 0.3s ease',
              }}
            >
              {line.text || '\u00a0'}
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 24px',
            borderTop: `1px solid ${t.border}`,
            fontFamily: "'Fira Code', monospace",
            fontSize: '13px',
            transition: 'border-color 0.3s ease',
          }}
        >
          <span
            style={{
              color: t.muted,
              flexShrink: 0,
            }}
          >
            {PROMPT}
          </span>

          <input
            ref={inputRef}
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="help"
            autoComplete="off"
            spellCheck={false}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontFamily: "'Fira Code', monospace",
              fontSize: '13px',
              color: t.ink,
              caretColor: t.ink,
              transition: 'color 0.3s ease',
            }}
          />
        </div>

        {/* Suggestions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            padding: '12px 24px',
            borderTop: `1px solid ${t.border}`,
            backgroundColor: t.bg,
            transition:
              'background-color 0.3s ease, border-color 0.3s ease',
          }}
        >
          {Object.keys(commands).map((s) => (
            <button
              key={s}
              onClick={() => runCmd(s)}
              style={{
                fontSize: '11px',
                padding: '5px 12px',
                borderRadius: '999px',
                border: `1px solid ${t.border}`,
                color: t.muted,
                backgroundColor: 'transparent',
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.ink
                e.currentTarget.style.color = t.ink
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.border
                e.currentTarget.style.color = t.muted
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function circle(color) {
  return {
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    backgroundColor: color,
  }
}

function themeShadow(t) {
  return t.bg === '#111110'
    ? '0 10px 40px rgba(0,0,0,0.35)'
    : '0 10px 30px rgba(0,0,0,0.04)'
}