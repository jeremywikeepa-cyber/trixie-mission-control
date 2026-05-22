import React, { useState, useCallback, useEffect } from 'react'
import { TrixieSidebar } from './TrixieSidebar'
import { AlexPanel } from './AlexPanel'

/* ── Types ── */

type AppId =
  | 'dashboard' | 'crm' | 'estimator' | 'pm' | 'field'
  | 'content-studio' | 'content-ops' | 'feasibility'

export interface TrixieShellProps {
  activeApp: AppId
  activeSection: string
  children: React.ReactNode
}

/* ── Component ── */

export const TrixieShell: React.FC<TrixieShellProps> = ({
  activeApp,
  activeSection,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem('trixie-sidebar-collapsed') === 'true'
    } catch {
      return false
    }
  })
  const [alexOpen, setAlexOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setCollapsed((prev) => {
      const next = !prev
      try {
        localStorage.setItem('trixie-sidebar-collapsed', String(next))
      } catch {}
      return next
    })
  }, [])

  // Keyboard shortcut: Cmd+K or Ctrl+K to toggle Alex
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setAlexOpen((prev) => !prev)
      }
      if (e.key === 'Escape' && alexOpen) {
        setAlexOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [alexOpen])

  const sidebarWidth = collapsed ? 52 : 200

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--color-bg)',
      }}
    >
      {/* Sidebar */}
      <TrixieSidebar
        activeSection={activeSection}
        collapsed={collapsed}
        onToggle={handleToggle}
        onAskAlex={() => setAlexOpen((prev) => !prev)}
      />

      {/* Content area */}
      <div
        style={{
          flex: 1,
          marginLeft: sidebarWidth,
          minHeight: '100vh',
          transition: 'margin-left 200ms ease',
        }}
      >
        {children}
      </div>

      {/* Alex panel */}
      <AlexPanel
        open={alexOpen}
        onClose={() => setAlexOpen(false)}
        context={{ app: activeApp, section: activeSection }}
      />
    </div>
  )
}
