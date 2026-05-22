import { Users, Search, Filter, Plus } from 'lucide-react'

/* ── Mock Data ── */

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  source: string
  stage: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost'
  value: number
  createdAt: string
}

const LEADS: Lead[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    phone: '0412 345 678',
    source: 'Website',
    stage: 'qualified',
    value: 85000,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'David Chen',
    email: 'david.chen@corp.com',
    phone: '0423 456 789',
    source: 'Referral',
    stage: 'proposal',
    value: 120000,
    createdAt: '2024-01-18',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma.w@business.com',
    phone: '0434 567 890',
    source: 'Trade Show',
    stage: 'new',
    value: 45000,
    createdAt: '2024-01-20',
  },
  {
    id: '4',
    name: 'Michael Brown',
    email: 'mbrown@company.com',
    phone: '0445 678 901',
    source: 'Website',
    stage: 'negotiation',
    value: 200000,
    createdAt: '2024-01-12',
  },
]

const STAGE_STYLES = {
  new: { bg: '#F3F4F6', text: '#6B7280' },
  contacted: { bg: '#DBEAFE', text: '#2563EB' },
  qualified: { bg: '#D1FAE5', text: '#059669' },
  proposal: { bg: '#FEF3C7', text: '#D97706' },
  negotiation: { bg: '#FCE7F3', text: '#DB2777' },
  won: { bg: '#D1FAE5', text: '#059669' },
  lost: { bg: '#FEE2E2', text: '#DC2626' },
}

export function Pipeline() {
  return (
    <div style={{ padding: '32px 40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Users size={28} style={{ color: 'var(--color-olive)' }} />
          <h1
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: 28,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            Pipeline
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
          Add Lead
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
            placeholder="Search leads..."
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

      {/* Table */}
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--color-surface-secondary)' }}>
              {['Name', 'Email', 'Phone', 'Source', 'Stage', 'Value'].map((header) => (
                <th
                  key={header}
                  style={{
                    padding: '14px 16px',
                    textAlign: 'left',
                    fontFamily: 'var(--font-family)',
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LEADS.map((lead, idx) => {
              const stageStyle = STAGE_STYLES[lead.stage]
              return (
                <tr
                  key={lead.id}
                  style={{
                    borderBottom: idx < LEADS.length - 1 ? '1px solid var(--color-border)' : 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-surface-hover)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <td
                    style={{
                      padding: '14px 16px',
                      fontFamily: 'var(--font-family)',
                      fontSize: 14,
                      fontWeight: 500,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {lead.name}
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      fontFamily: 'var(--font-family)',
                      fontSize: 14,
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {lead.email}
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      fontFamily: 'var(--font-family)',
                      fontSize: 14,
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {lead.phone}
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      fontFamily: 'var(--font-family)',
                      fontSize: 14,
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {lead.source}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '4px 10px',
                        borderRadius: 4,
                        background: stageStyle.bg,
                        color: stageStyle.text,
                        fontFamily: 'var(--font-family)',
                        fontSize: 12,
                        fontWeight: 500,
                        textTransform: 'capitalize',
                      }}
                    >
                      {lead.stage}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      fontFamily: 'var(--font-family)',
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    ${lead.value.toLocaleString()}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
