import { CheckSquare, Search, Filter, Plus } from 'lucide-react'

/* ── Mock Data ── */

interface Project {
  id: string
  name: string
  client: string
  location: string
  status: 'planning' | 'production' | 'delivery' | 'install' | 'complete'
  progress: number
  dueDate: string
}

const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Mitchell Residence',
    client: 'Sarah Mitchell',
    location: 'Cronulla, NSW',
    status: 'production',
    progress: 65,
    dueDate: '2024-03-15',
  },
  {
    id: '2',
    name: 'Chen Office Build',
    client: 'David Chen',
    location: 'Parramatta, NSW',
    status: 'planning',
    progress: 15,
    dueDate: '2024-04-20',
  },
  {
    id: '3',
    name: 'Wilson Granny Flat',
    client: 'Emma Wilson',
    location: 'Penrith, NSW',
    status: 'install',
    progress: 90,
    dueDate: '2024-02-28',
  },
  {
    id: '4',
    name: 'Brown Duplex',
    client: 'Michael Brown',
    location: 'Wollongong, NSW',
    status: 'delivery',
    progress: 75,
    dueDate: '2024-03-05',
  },
]

const STATUS_STYLES = {
  planning: { bg: '#F3F4F6', text: '#6B7280', label: 'Planning' },
  production: { bg: '#DBEAFE', text: '#2563EB', label: 'Production' },
  delivery: { bg: '#FEF3C7', text: '#D97706', label: 'Delivery' },
  install: { bg: '#FCE7F3', text: '#DB2777', label: 'Install' },
  complete: { bg: '#D1FAE5', text: '#059669', label: 'Complete' },
}

export function Projects() {
  return (
    <div style={{ padding: '32px 40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <CheckSquare size={28} style={{ color: 'var(--color-olive)' }} />
          <h1
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: 28,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            Projects
          </h1>
        </div>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 20px',
            background: 'var(--color-olive)',
            border: 'none',
            borderRadius: 8,
            color: 'white',
            fontFamily: 'var(--font-family)',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Plus size={16} />
          New Project
        </button>
      </div>

      {/* Search and Filter */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '0 14px',
            height: 42,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
          }}
        >
          <Search size={18} style={{ color: 'var(--color-text-tertiary)' }} />
          <input
            placeholder="Search projects..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-family)',
              fontSize: 14,
              color: 'var(--color-text-primary)',
              background: 'transparent',
            }}
          />
        </div>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '0 16px',
            height: 42,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            fontFamily: 'var(--font-family)',
            fontSize: 14,
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
          }}
        >
          <Filter size={16} />
          Filter
        </button>
      </div>

      {/* Project Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}
      >
        {PROJECTS.map((project) => {
          const statusStyle = STATUS_STYLES[project.status]
          return (
            <div
              key={project.id}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 10,
                padding: 24,
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-olive)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 16,
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      margin: 0,
                      marginBottom: 4,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 13,
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    {project.client} • {project.location}
                  </p>
                </div>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: 4,
                    background: statusStyle.bg,
                    color: statusStyle.text,
                    fontFamily: 'var(--font-family)',
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  {statusStyle.label}
                </span>
              </div>

              {/* Progress Bar */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 12,
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Progress
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 12,
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {project.progress}%
                  </span>
                </div>
                <div
                  style={{
                    height: 6,
                    background: 'var(--color-surface-secondary)',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${project.progress}%`,
                      height: '100%',
                      background: 'var(--color-olive)',
                      borderRadius: 3,
                      transition: 'width 300ms ease',
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-family)',
                  fontSize: 12,
                  color: 'var(--color-text-tertiary)',
                }}
              >
                Due: {new Date(project.dueDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
