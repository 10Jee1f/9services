'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { products } from '@/lib/products';
import Navbar from '@/components/Navbar';

const COUNTDOWN = 10;

export default function DownloadStep2() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  const [seconds, setSeconds] = useState(COUNTDOWN);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!product?.downloadLink) return;
    if (seconds <= 0) { setReady(true); return; }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, product]);

  if (!product) {
    return (
      <div style={{ background: '#050505', minHeight: '100vh', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#a0a0a0', marginBottom: '16px' }}>Product not found.</p>
          <Link href="/" style={{ color: '#ff2200', textDecoration: 'none', fontWeight: 700 }}>Go Home</Link>
        </div>
      </div>
    );
  }

  const progress = ((COUNTDOWN - seconds) / COUNTDOWN) * 100;

  return (
    <div style={{ background: '#050505', minHeight: '100vh', color: '#ffffff' }}>
      <Script src="https://quge5.com/88/tag.min.js" data-zone="269687" strategy="afterInteractive" data-cfasync="false" />
      <Navbar />

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '100px 20px 60px', textAlign: 'center' }}>

        {/* Step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a0a0a0', fontSize: '12px', fontWeight: 700 }}>
            <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#ff2200', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>2</span>
            Final Step
          </div>
          <span style={{ color: '#555' }}>→</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffcc00', fontSize: '12px', fontWeight: 700 }}>
            <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#ffcc00', color: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>✓</span>
            Download
          </div>
        </div>

        {/* Thumbnail */}
        {product.thumbnail && (
          <div style={{ width: '100%', height: '180px', borderRadius: '16px', overflow: 'hidden', position: 'relative', marginBottom: '28px', border: '1px solid rgba(255,255,255,0.07)' }}>
            <Image src={product.thumbnail} alt={product.name} fill style={{ objectFit: 'cover', opacity: 0.85 }} sizes="680px" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 60%)' }} />
          </div>
        )}

        <h1 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 900, letterSpacing: '-1px', margin: '0 0 12px', color: '#ffffff' }}>
          {product.name}
        </h1>
        <p style={{ fontSize: '13px', color: '#a0a0a0', margin: '0 0 36px' }}>Step 2 of 2 — Getting your download link ready...</p>

        {/* Countdown / Download box */}
        <div style={{ background: '#0d0d0d', border: `1px solid ${ready ? 'rgba(255,204,0,0.35)' : 'rgba(255,34,0,0.2)'}`, borderRadius: '16px', padding: '32px 24px', transition: 'border-color 400ms ease' }}>
          {!ready ? (
            <>
              <p style={{ fontSize: '13px', color: '#a0a0a0', margin: '0 0 16px' }}>
                Finalizing your download link...
              </p>
              <div style={{ fontSize: '72px', fontWeight: 900, color: '#ff2200', letterSpacing: '-4px', lineHeight: 1, margin: '0 0 16px' }}>
                {seconds}
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden', marginBottom: '14px' }}>
                <div style={{ height: '100%', background: '#ff2200', borderRadius: '100px', width: `${progress}%`, transition: 'width 1s linear' }} />
              </div>
              <p style={{ fontSize: '12px', color: '#555', margin: 0 }}>
                Link will be ready in {seconds}s
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: '14px', color: '#a0a0a0', margin: '0 0 8px' }}>
                Your link is ready!
              </p>
              <div style={{ fontSize: '22px', margin: '0 0 20px', color: '#ffcc00' }}>✓</div>
              <a
                href={product.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() => {
                  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
                    Notification.requestPermission().catch(() => {});
                  }
                }}
                style={{ fontSize: '16px', padding: '16px 40px', display: 'inline-flex', animation: 'fadeIn 0.4s ease' }}
              >
                Download from MediaFire
              </a>
              <p style={{ fontSize: '11px', color: '#555', marginTop: '12px' }}>
                Opens in a new tab
              </p>
            </>
          )}
        </div>

        {/* Back */}
        <div style={{ marginTop: '28px' }}>
          <Link href={`/download/${product.slug}`} style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}>
            ← Back to Step 1
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
