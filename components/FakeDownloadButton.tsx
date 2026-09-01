'use client';

import { useEffect, useState } from 'react';

// A decoy "Download Now" button that links to an ad URL.
// It appears on every page at a random floating position.
export default function FakeDownloadButton() {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    const top = 8 + Math.random() * 62; // % from top
    const left = 4 + Math.random() * 62; // % from left
    setPos({ top, left });
  }, []);

  if (!pos) return null;

  return (
    <a
      href="https://omg10.com/4/11703316"
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="Download Now"
      style={{
        position: 'fixed',
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        zIndex: 9999,
        background: 'linear-gradient(135deg, #ff2200, #ffcc00)',
        color: '#050505',
        fontWeight: 800,
        fontSize: '14px',
        padding: '10px 18px',
        borderRadius: '100px',
        boxShadow: '0 6px 20px rgba(255,34,0,0.45)',
        textDecoration: 'none',
        animation: 'fadeIn 0.4s ease',
        fontFamily: 'inherit',
      }}
    >
      Download Now
    </a>
  );
}
