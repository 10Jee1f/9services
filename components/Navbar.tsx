'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const links = [
    { label: 'Home',    href: '/' },
    { label: 'Panels',  href: '/#products' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(5,5,5,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 300ms ease',
        padding: '0 16px',
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #ff2200', boxShadow: '0 0 10px rgba(255,34,0,0.6)', flexShrink: 0 }}>
              <Image src="/logo.jpg" alt="JCANFLY logo" width={32} height={32} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <span style={{ fontWeight: 800, fontSize: '16px', letterSpacing: '-0.3px', color: '#ffffff' }}>
              JCANFLY
            </span>
          </div>
        </Link>

        {/* Desktop links — only rendered on md+ */}
        {isDesktop && (
          <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '13px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', transition: 'color 150ms ease' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ff2200')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#a0a0a0')}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile hamburger — only rendered on mobile */}
        {!isDesktop && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff', padding: '5px 9px', cursor: 'pointer', fontSize: '16px', lineHeight: 1 }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ position: 'absolute', top: '56px', left: 0, right: 0, background: 'rgba(5,5,5,0.98)', borderBottom: '1px solid rgba(255,34,0,0.15)', padding: '8px 0' }}>
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '13px 20px', color: '#a0a0a0', textDecoration: 'none', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
