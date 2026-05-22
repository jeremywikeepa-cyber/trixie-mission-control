import { 
  LayoutDashboard, Users, FileText, Mail, CheckSquare, Calendar, 
  Wrench, Search, Camera, Send, ArrowRight, TrendingUp 
} from 'lucide-react'

/* ── Module Data ── */

interface Module {
  id: string
  name: string
  description: string
  icon: React.FC<any>
  status: 'live' | 'built' | 'planned'
  path: string
  externalUrl?: string
}

const MODULES: Module[] = [
  {
    id: 'pipeline',
    name: 'Pipeline',
    description: 'Track leads from enquiry to contract',
    icon: Users,
    status: 'built',
    path: '/pipeline',
    externalUrl: 'https://keep-crm.replit.app',
  },
  {
    id: 'quotes',
    name: 'Quotes',
    description: 'Generate and manage customer quotes',
    icon: FileText,
    status: 'planned',
    path: '/quotes',
    externalUrl: 'https://keep-crm.replit.app/quotes',
  },
  {
    id: 'enquiries',
    name: 'Enquiries',
    description: 'Website form submissions inbox',
    icon: Mail,
    status: 'planned',
    path: '/enquiries',
    externalUrl: 'https://keep-crm.replit.app/enquiries',
  },
  {
    id: 'projects',
    name: 'Projects',
    description: 'Active project delivery & tracking',
    icon: CheckSquare,
    status: 'built',
    path: '/projects',
    externalUrl: 'https://field-capture.replit.app',
  },
  {
    id: 'schedule',
    name: 'Schedule',
    description: 'Production and installation calendar',
    icon: Calendar,
    status: 'planned',
    path: '/schedule',
  },
  {
    id: 'field',
    name: 'Field',
    description: 'Site reports and inspections',
    icon: Wrench,
    status: 'planned',
    path: '/field',
    externalUrl: 'https://field-capture.replit.app',
  },
  {
    id: 'feasibility',
    name: 'Feasibility',
    description: 'Site analysis and lot assessments',
    icon: Search,
    status: 'planned',
    path: '/feasibility',
  },
  {
    id: 'studio',
    name: 'Content Studio',
    description: 'Media library and asset management',
    icon: Camera,
    status: 'live',
    path: '/studio',
    externalUrl: 'https://keep-content-studio.replit.app',
  },
  {
    id: 'publishing',
    name: 'Publishing',
    description: 'Social media and marketing ops',
    icon: Send,
    status: 'planned',
    path: '/publishing',
    externalUrl: 'https://modular-content-ops.replit.app',
  },
]

const STATUS_STYLES = {
  live: {
    bg: '#F0FDF4',
    text: '#16A34A',
    label: 'Live',
  },
  built: {
    bg: '#EFF6FF',
    text: '#2563EB',
    label: 'Built',
  },
  planned: {
    bg: '#F9FAFB',
    text: '#6B7280',
    label: 'Planned',
  },
}

/* ── Component ── */

export function Dashboard() {
  return (
    <div style={{ padding: '32px 40px', maxWidth: 1200 }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <LayoutDashboard size={28} style={{ color: 'var(--color-olive)' }} />
          <h1
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: 28,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            Mission Control
          </h1>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: 15,
            color: 'var(--color-text-secondary)',
            margin: 0,
            maxWidth: 600,
          }}
        >
          Welcome to Trixie OS — the operating system for Keep Group. Navigate the modules below to manage your pipeline, projects, content, and more.
        </p>
      </div>

      {/* Stats Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          marginBottom: 40,
        }}
      >
        {[
          { label: 'Active Leads', value: '24', change: '+3 this week' },
          { label: 'Projects In Progress', value: '8', change: '2 pending install' },
          { label: 'Content Assets', value: '156', change: '+12 this month' },
          { label: 'Team Members', value: '6', change: 'All online' },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 8,
              padding: '20px 24px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: 13,
                color: 'var(--color-text-secondary)',
                marginBottom: 8,
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: 32,
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 4,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: 12,
                color: 'var(--color-olive)',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <TrendingUp size={12} />
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Module Cards */}
      <div style={{ marginBottom: 24 }}>
        <h2
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: 18,
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: 16,
          }}
        >
          Modules
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {MODULES.map((module) => {
            const Icon = module.icon
            const statusStyle = STATUS_STYLES[module.status]
            const href = module.externalUrl || module.path

            return (
              <a
                key={module.id}
                href={href}
                target={module.externalUrl ? '_blank' : undefined}
                rel={module.externalUrl ? 'noopener noreferrer' : undefined}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 10,
                  padding: 20,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  transition: 'all 150ms ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-olive)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      background: 'var(--color-surface-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} color="var(--color-olive)" />
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      fontFamily: 'var(--font-family)',
                      padding: '4px 8px',
                      borderRadius: 4,
                      background: statusStyle.bg,
                      color: statusStyle.text,
                    }}
                  >
                    {statusStyle.label}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 15,
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: 4,
                    }}
                  >
                    {module.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 13,
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {module.description}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    fontSize: 12,
                    fontWeight: 500,
                    color: 'var(--color-olive)',
                    marginTop: 'auto',
                  }}
                >
                  Open module <ArrowRight size={12} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
