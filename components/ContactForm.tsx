'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        style={{
          background: 'rgba(255,34,0,0.08)',
          border: '1px solid rgba(255,34,0,0.25)',
          borderRadius: '16px',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <div style={{ color: '#ff2200', fontWeight: 700, marginBottom: '4px', fontSize: '16px' }}>Message Sent!</div>
        <div style={{ color: '#a0a0a0', fontSize: '14px' }}>
          We&apos;ll get back to you within 5 minutes.
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      style={{
        background: '#0d0d0d',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        textAlign: 'left',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {[
          { label: 'Name', type: 'text', placeholder: 'Your name' },
          { label: 'Email', type: 'email', placeholder: 'your@email.com' },
        ].map((field) => (
          <div key={field.label}>
            <label
              style={{
                fontSize: '12px',
                color: '#666',
                fontWeight: 600,
                display: 'block',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {field.label}
            </label>
            <input
              type={field.type}
              required
              placeholder={field.placeholder}
              style={{
                width: '100%',
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '12px 14px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(255,34,0,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>
        ))}
      </div>
      <div>
        <label
          style={{
            fontSize: '12px',
            color: '#666',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Message
        </label>
        <textarea
          required
          placeholder="Describe your question or issue..."
          rows={4}
          style={{
            width: '100%',
            background: '#0a0a0a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
            padding: '12px 14px',
            color: '#ffffff',
            fontSize: '14px',
            outline: 'none',
            resize: 'none',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'rgba(255,34,0,0.5)')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
        />
      </div>
      <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
        Send Message
      </button>
    </form>
  );
}
