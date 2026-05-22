import { Camera, Search, Filter, Upload, Grid, List, Image, Video, FileText } from 'lucide-react'
import { useState } from 'react'

/* ── Mock Data ── */

interface Asset {
  id: string
  name: string
  type: 'image' | 'video' | 'document'
  thumbnail: string
  size: string
  uploadedAt: string
  tags: string[]
}

const ASSETS: Asset[] = [
  {
    id: '1',
    name: 'hero-render-exterior.jpg',
    type: 'image',
    thumbnail: 'https://placehold.co/400x300/4A5240/ffffff?text=Render',
    size: '2.4 MB',
    uploadedAt: '2024-01-18',
    tags: ['renders', 'exterior', 'hero'],
  },
  {
    id: '2',
    name: 'site-walkthrough.mp4',
    type: 'video',
    thumbnail: 'https://placehold.co/400x300/111111/ffffff?text=Video',
    size: '48.2 MB',
    uploadedAt: '2024-01-15',
    tags: ['video', 'site', 'walkthrough'],
  },
  {
    id: '3',
    name: 'floorplan-v2.pdf',
    type: 'document',
    thumbnail: 'https://placehold.co/400x300/E8E8E8/666666?text=PDF',
    size: '1.1 MB',
    uploadedAt: '2024-01-20',
    tags: ['floorplan', 'technical'],
  },
  {
    id: '4',
    name: 'kitchen-interior.jpg',
    type: 'image',
    thumbnail: 'https://placehold.co/400x300/D4AF37/ffffff?text=Interior',
    size: '1.8 MB',
    uploadedAt: '2024-01-19',
    tags: ['renders', 'interior', 'kitchen'],
  },
  {
    id: '5',
    name: 'construction-progress.jpg',
    type: 'image',
    thumbnail: 'https://placehold.co/400x300/666666/ffffff?text=Progress',
    size: '3.2 MB',
    uploadedAt: '2024-01-17',
    tags: ['construction', 'progress'],
  },
  {
    id: '6',
    name: 'client-testimonial.mp4',
    type: 'video',
    thumbnail: 'https://placehold.co/400x300/4A5240/ffffff?text=Testimonial',
    size: '156 MB',
    uploadedAt: '2024-01-14',
    tags: ['video', 'testimonial', 'client'],
  },
]

const TYPE_ICONS = {
  image: Image,
  video: Video,
  document: FileText,
}

export function Studio() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div style={{ padding: '32px 40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Camera size={28} style={{ color: 'var(--color-olive)' }} />
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: 28,
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                margin: 0,
              }}
            >
              Content Studio
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: 13,
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              {ASSETS.length} assets in library
            </p>
          </div>
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
          <Upload size={16} />
          Upload
        </button>
      </div>

      {/* Search, Filter, View Toggle */}
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
            placeholder="Search assets..."
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
        <div
          style={{
            display: 'flex',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setViewMode('grid')}
            style={{
              width: 42,
              height: 42,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              background: viewMode === 'grid' ? 'var(--color-surface-secondary)' : 'transparent',
              color: viewMode === 'grid' ? 'var(--color-olive)' : 'var(--color-text-tertiary)',
              cursor: 'pointer',
            }}
          >
            <Grid size={18} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            style={{
              width: 42,
              height: 42,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              borderLeft: '1px solid var(--color-border)',
              background: viewMode === 'list' ? 'var(--color-surface-secondary)' : 'transparent',
              color: viewMode === 'list' ? 'var(--color-olive)' : 'var(--color-text-tertiary)',
              cursor: 'pointer',
            }}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Assets Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: viewMode === 'grid' ? 'repeat(3, 1fr)' : '1fr',
          gap: viewMode === 'grid' ? 20 : 12,
        }}
      >
        {ASSETS.map((asset) => {
          const TypeIcon = TYPE_ICONS[asset.type]

          if (viewMode === 'list') {
            return (
              <div
                key={asset.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: 16,
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 8,
                  cursor: 'pointer',
                }}
              >
                <img
                  src={asset.thumbnail}
                  alt={asset.name}
                  style={{
                    width: 60,
                    height: 45,
                    objectFit: 'cover',
                    borderRadius: 4,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 14,
                      fontWeight: 500,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {asset.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 12,
                      color: 'var(--color-text-tertiary)',
                    }}
                  >
                    {asset.size} • {asset.uploadedAt}
                  </div>
                </div>
                <TypeIcon size={18} style={{ color: 'var(--color-text-secondary)' }} />
              </div>
            )
          }

          return (
            <div
              key={asset.id}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 10,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 150ms ease',
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
              <div style={{ position: 'relative' }}>
                <img
                  src={asset.thumbnail}
                  alt={asset.name}
                  style={{
                    width: '100%',
                    height: 160,
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TypeIcon size={14} color="white" />
                </div>
              </div>
              <div style={{ padding: 14 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-family)',
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--color-text-primary)',
                    marginBottom: 4,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {asset.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-family)',
                    fontSize: 12,
                    color: 'var(--color-text-tertiary)',
                    marginBottom: 8,
                  }}
                >
                  {asset.size}
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {asset.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '2px 8px',
                        background: 'var(--color-surface-secondary)',
                        borderRadius: 4,
                        fontFamily: 'var(--font-family)',
                        fontSize: 11,
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
