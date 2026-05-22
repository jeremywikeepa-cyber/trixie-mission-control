import { useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  FileText,
  Mail,
  CheckSquare,
  Calendar,
  Wrench,
  Search,
  Camera,
  Send,
  Settings,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react'

/* ── Types ── */

export type NavItemId =
  | 'dashboard' | 'pipeline' | 'quotes' | 'enquiries'
  | 'projects' | 'schedule' | 'field' | 'feasibility'
  | 'studio' | 'publishing' | 'settings'

interface NavItem {
  id: NavItemId
  label: string
  icon: React.FC<any>
  path: string
  externalUrl?: string
}

interface NavSection {
  label: string
  items: NavItem[]
}

export interface TrixieSidebarProps {
  activeSection: string
  collapsed?: boolean
  onToggle?: () => void
  onAskAlex?: () => void
}

/* ── Navigation Data ── */

const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Overview',
    items: [{ id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' }],
  },
  {
    label: 'Sales',
    items: [
      { id: 'pipeline', label: 'Pipeline', icon: Users, path: '/pipeline', externalUrl: 'https://keep-crm.replit.app' },
      { id: 'quotes', label: 'Quotes', icon: FileText, path: '/quotes', externalUrl: 'https://keep-crm.replit.app/quotes' },
      { id: 'enquiries', label: 'Enquiries', icon: Mail, path: '/enquiries', externalUrl: 'https://keep-crm.replit.app/enquiries' },
    ],
  },
  {
    label: 'Delivery',
    items: [
      { id: 'projects', label: 'Projects', icon: CheckSquare, path: '/projects', externalUrl: 'https://field-capture.replit.app' },
      { id: 'schedule', label: 'Schedule', icon: Calendar, path: '/schedule' },
      { id: 'field', label: 'Field', icon: Wrench, path: '/field', externalUrl: 'https://field-capture.replit.app' },
      { id: 'feasibility', label: 'Feasibility', icon: Search, path: '/feasibility' },
    ],
  },
  {
    label: 'Content',
    items: [
      { id: 'studio', label: 'Studio', icon: Camera, path: '/studio', externalUrl: 'https://keep-content-studio.replit.app' },
      { id: 'publishing', label: 'Publishing', icon: Send, path: '/publishing', externalUrl: 'https://modular-content-ops.replit.app' },
    ],
  },
  {
    label: 'System',
    items: [{ id: 'settings', label: 'Settings', icon: Settings, path: '/settings' }],
  },
]

/* ── Keep Logo SVG ── */

const KeepLogo = () => (
  <svg viewBox="0 0 100 120" width="28" height="34" style={{display:'block'}}>
    <rect width="100" height="120" fill="#4A5240" rx="10"/>
    <path
      d="M 28 18 L 40 18 L 40 45 L 65 18 L 80 18 L 50 55 L 80 102 L 65 102 L 40 63 L 40 102 L 28 102 Z"
      fill="#D4AF37"
    />
  </svg>
)

/* ── Component ── */

export const TrixieSidebar: React.FC<TrixieSidebarProps> = ({
  activeSection,
  collapsed = false,
  onToggle,
  onAskAlex,
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const sidebarWidth = collapsed ? 52 : 200

  return (
    <nav
      style={{
        width: sidebarWidth,
        height: '100vh',
        background: 'var(--color-nav-bg)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 200ms ease',
        overflow: 'hidden',
        flexShrink: 0,
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 100,
      }}
    >
      {/* ── Logo bar ── */}
      <div
        style={{
          height: 52,
          display: 'flex',
          alignItems: 'center',
          padding: collapsed ? '0 12px' : '0 12px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          justifyContent: collapsed ? 'center' : 'space-between',
          gap: 8,
        }}
      >
        {!collapsed && (
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <KeepLogo />
            <div style={{display:'flex', flexDirection:'column', lineHeight:1.2}}>
              <span style={{fontFamily:'var(--font-family)', fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.9)'}}>KEEP</span>
              <span style={{fontFamily:'var(--font-family)', fontSize:9, fontWeight:400, color:'rgba(255,255,255,0.5)', letterSpacing:'0.08em'}}>MODULAR</span>
            </div>
          </div>
        )}
        <button
          onClick={onToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          style={{
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.06)',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.6)',
            flexShrink: 0,
          }}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* ── Navigation — scrollable ── */}
      <div style={{ flex: 1, overflowY: 'auto', paddingTop: 4 }}>
        {NAV_SECTIONS.map((section) => (
          <div key={section.label}>
            {!collapsed && (
              <div
                style={{
                  padding: '12px 16px 4px',
                  fontFamily: 'var(--font-family)',
                  fontSize: 10,
                  fontWeight: 500,
                  color: 'var(--color-nav-section-label)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {section.label}
              </div>
            )}
            {section.items.map((item) => {
              const isActive = activeSection === item.id
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.externalUrl && item.id !== 'dashboard') {
                      window.open(item.externalUrl, '_blank')
                    } else {
                      navigate(item.path)
                    }
                  }}
                  title={collapsed ? item.label : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: collapsed ? 0 : 10,
                    padding: collapsed ? '7px 0' : '7px 12px',
                    paddingLeft: isActive && !collapsed ? 10 : collapsed ? 0 : 12,
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    cursor: 'pointer',
                    color: isActive ? 'var(--color-nav-text-active)' : 'var(--color-nav-text)',
                    background: isActive ? 'var(--color-nav-item-active-bg)' : 'transparent',
                    borderLeft: isActive ? '2px solid var(--color-nav-accent)' : '2px solid transparent',
                    transition: 'all 120ms ease',
                    fontFamily: 'var(--font-family)',
                    fontSize: 13,
                    fontWeight: 400,
                  }}
                >
                  <Icon size={16} />
                  {!collapsed && <span>{item.label}</span>}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* ── Alex panel trigger (bottom) ── */}
      <div
        onClick={onAskAlex}
        style={{
          height: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          padding: collapsed ? 0 : '0 12px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.03)',
          cursor: 'pointer',
          transition: 'background 120ms ease',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: collapsed ? 0 : 8,
            justifyContent: collapsed ? 'center' : 'flex-start',
            width: '100%',
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: 'var(--color-olive)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Star size={12} color="white" fill="white" />
          </div>
          {!collapsed && (
            <>
              <span
                style={{
                  fontFamily: 'var(--font-family)',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 500,
                }}
              >
                Ask Alex
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-family)',
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.25)',
                  background: 'rgba(255,255,255,0.06)',
                  padding: '2px 5px',
                  borderRadius: 3,
                  marginLeft: 'auto',
                }}
              >
                ⌘K
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
