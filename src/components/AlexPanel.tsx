import React, { useState, useRef, useEffect } from 'react'
import { Star, X, Send } from 'lucide-react'

/* ── Types ── */

export interface AlexMessage {
  id: string
  role: 'user' | 'alex'
  text: string
  timestamp: Date
}

export interface AlexPanelProps {
  open: boolean
  onClose: () => void
  context?: {
    app: string
    section: string
  }
}

/* ── Component ── */

export const AlexPanel: React.FC<AlexPanelProps> = ({
  open,
  onClose,
  context,
}) => {
  const [messages, setMessages] = useState<AlexMessage[]>([
    {
      id: 'welcome',
      role: 'alex',
      text: "Hey! I'm Alex, your AI assistant. Ask me anything about Mission Control, your projects, or how to get things done.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        // Toggle would need to be handled by parent
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!open) return null

  const handleSend = () => {
    if (!input.trim() || isTyping) return

    const userMsg: AlexMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: input.trim(),
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate Alex response
    setTimeout(() => {
      const alexMsg: AlexMessage = {
        id: `alex-${Date.now()}`,
        role: 'alex',
        text: context
          ? `Looking at your ${context.app}/${context.section} context... I'll help with "${userMsg.text}"`
          : `Great question about "${userMsg.text}" — let me look into that for you.`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, alexMsg])
      setIsTyping(false)
    }, 800)
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: 360,
        height: 400,
        background: '#1A1A1A',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderLeft: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 200,
        borderTopLeftRadius: 12,
        boxShadow: '0 -4px 24px rgba(0,0,0,0.2)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: 'var(--color-olive)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Star size={12} color="white" fill="white" />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: 14,
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 500,
            }}
          >
            Alex
          </span>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.4)',
            cursor: 'pointer',
            padding: 4,
            display: 'flex',
          }}
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              padding: '10px 14px',
              borderRadius: 10,
              background:
                msg.role === 'user'
                  ? 'rgba(74,82,64,0.5)'
                  : 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'var(--font-family)',
              fontSize: 13,
              lineHeight: 1.5,
            }}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div
            style={{
              alignSelf: 'flex-start',
              padding: '10px 14px',
              borderRadius: 10,
              background: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'var(--font-family)',
              fontSize: 13,
            }}
          >
            Alex is thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        style={{
          padding: '12px 16px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          gap: 10,
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSend()
            }
          }}
          placeholder="Ask Alex anything..."
          style={{
            flex: 1,
            height: 38,
            padding: '0 12px',
            background: '#111111',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8,
            color: '#fff',
            fontFamily: 'var(--font-family)',
            fontSize: 13,
            outline: 'none',
          }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isTyping}
          style={{
            width: 38,
            height: 38,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-olive)',
            border: 'none',
            borderRadius: 8,
            cursor: !input.trim() || isTyping ? 'default' : 'pointer',
            opacity: !input.trim() || isTyping ? 0.5 : 1,
          }}
        >
          <Send size={16} color="white" />
        </button>
      </div>
    </div>
  )
}
