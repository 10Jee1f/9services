'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import { products, reviews } from '@/lib/products';

export default function Home() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh', color: '#ffffff' }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────── */}
      <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '500px', background: 'radial-gradient(ellipse, rgba(255,34,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
            <span className="hero-badge" style={{ background: 'rgba(255,34,0,0.1)', border: '1px solid rgba(255,34,0,0.35)', borderRadius: '100px', padding: '7px 20px', fontSize: '12px', color: '#ff2200', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              #1 Free Fire Cheat Provider — Trusted by 2,000+ Players
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.1, margin: '0 0 24px', color: '#ffffff' }}>
            TANJI &amp; JCANFLY{' '}
            <span style={{ color: '#ff2200' }}>CHEATS</span>
          </h1>

          <p style={{ fontSize: '17px', color: '#a0a0a0', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: '560px' }}>
            Undetected aimbot, ESP, speed hack &amp; more. Instant delivery, live updates, 24/7 support.
          </p>

          <div className="hero-cta-row" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#products" className="btn-primary" style={{ fontSize: '16px' }}>Browse Cheats →</a>
            <a href="#reviews" className="btn-secondary" style={{ fontSize: '16px' }}>See Reviews</a>
          </div>

          <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '60px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            {[
              { value: '2,000+', label: 'Happy Players', color: '#ffffff' },
              { value: '4.9★',   label: 'Trustpilot Rating', color: '#ffcc00' },
              { value: '24/7',   label: 'Live Support', color: '#ff2200' },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-val" style={{ fontSize: '26px', fontWeight: 800, color: s.color, letterSpacing: '-1px' }}>{s.value}</div>
                <div style={{ fontSize: '11px', color: '#555', marginTop: '4px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────── */}
      <section id="products" className="mobile-section" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', color: '#ff2200', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px' }}>Free Fire Cheats</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1px', margin: '0 0 14px', color: '#ffffff' }}>
              All <span style={{ color: '#ff2200' }}>Products</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#a0a0a0', margin: 0 }}>
              Undetected, updated every patch. Instant delivery.
            </p>
          </div>
          <div className="products-box" style={{ border: '1px solid rgba(255,34,0,0.2)', borderRadius: '20px', padding: '24px' }}>
            <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {products.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────── */}
      <section className="mobile-section" style={{ padding: '80px 24px', background: '#080808' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '11px', color: '#ff2200', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px' }}>Why JCANFLY</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1px', margin: 0, color: '#ffffff' }}>
              The Advantage You <span style={{ color: '#ffcc00' }}>Deserve</span>
            </h2>
          </div>
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Always Undetected',     desc: "Monitors Garena's anti-cheat 24/7. Zero bans since launch." },
              { title: 'Instant Delivery',       desc: 'License key delivered within seconds. Works on all devices.' },
              { title: 'Free Lifetime Updates',  desc: 'Silent auto-update every patch. Never miss a season.' },
              { title: '24/7 Live Support',      desc: 'Real humans on Instagram. Avg response under 5 minutes.' },
              { title: 'Encrypted Transactions', desc: 'Card, crypto, and PayPal all fully secured.' },
              { title: '4.9★ Trustpilot',        desc: '2,000+ verified reviews. Most trusted FF cheat online.' },
            ].map((f) => (
              <div key={f.title} className="feature-card" style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px 24px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#a0a0a0', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────── */}
      <section className="mobile-section" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', textAlign: 'center' }}>
            {[
              { value: '2,000+', label: 'Happy Players' },
              { value: '0',      label: 'Bans Caused' },
              { value: '3',      label: 'Products' },
              { value: '4.9/5',  label: 'Rating' },
              { value: '<5min',  label: 'Support Response' },
            ].map((s) => (
              <div key={s.label} className="stat-card" style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px 16px' }}>
                <div className="val" style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 900, color: '#00cc55', letterSpacing: '-1px', marginBottom: '6px' }}>{s.value}</div>
                <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────── */}
      <section id="reviews" className="mobile-section" style={{ padding: '80px 24px', background: '#080808' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', color: '#ff2200', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px' }}>Customer Reviews</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1px', margin: '0 0 12px', color: '#ffffff' }}>
              What Our <span style={{ color: '#ffcc00' }}>Players</span> Say
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ color: '#ffcc00', fontSize: '18px' }}>★★★★★</span>
              <span style={{ color: '#ffcc00', fontWeight: 700 }}>4.9</span>
              <span style={{ color: '#555', fontSize: '13px' }}>· 2,000+ verified reviews</span>
            </div>
          </div>
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {reviews.map((r) => (
              <div key={r.name} className="review-card" style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: '#ffffff' }}>{r.name}</div>
                    <div style={{ fontSize: '11px', color: '#555', marginTop: '2px' }}>{r.date}</div>
                  </div>
                  <div style={{ color: '#ffcc00', fontSize: '13px' }}>{'★'.repeat(r.rating)}</div>
                </div>
                <p style={{ margin: 0, fontSize: '13px', color: '#a0a0a0', lineHeight: 1.65 }}>&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE STATUS ──────────────────────── */}
      <section className="mobile-section-sm" style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#ff2200', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px' }}>Live Status</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '32px', color: '#ffffff' }}>
            All Systems <span style={{ color: '#ff2200' }}>Operational</span>
          </h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: '#0d0d0d', border: '1px solid rgba(255,34,0,0.2)', borderRadius: '12px', padding: '14px 24px' }}>
            <span style={{ fontSize: '13px', color: '#a0a0a0' }}>JCANFLY FF Aimbot Pro</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#ffcc00', fontWeight: 700 }}>
              <span style={{ width: '7px', height: '7px', background: '#ffcc00', borderRadius: '50%', display: 'inline-block' }} />
              Online
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="mobile-section" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="cta-inner" style={{ background: 'rgba(255,34,0,0.05)', border: '1px solid rgba(255,34,0,0.2)', borderRadius: '24px', padding: 'clamp(40px, 6vw, 80px) 40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-1px', margin: '0 0 16px', color: '#ffffff' }}>
              Ready to Drop Every Lobby?{' '}
              <span style={{ color: '#ff2200' }}>Join 2,000+ Players</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#a0a0a0', marginBottom: '32px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }}>
              Completely free — no payment, no account. Download and dominate today.
            </p>
            <a href="https://www.youtube.com/@TANJIMENA" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '16px' }}>Watch on YouTube</a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────── */}
      <section id="contact" className="mobile-section" style={{ padding: '80px 24px', background: '#080808' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#ff2200', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px' }}>Get In Touch</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '14px', color: '#ffffff' }}>
            Contact <span style={{ color: '#ff2200' }}>Support</span>
          </h2>
          <p style={{ color: '#a0a0a0', marginBottom: '36px', fontSize: '14px', lineHeight: 1.6 }}>
            Online 24/7. Fastest response on Instagram — under 5 minutes.
          </p>
          <ContactForm />
          <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/tanji__off/" target="_blank" rel="noopener noreferrer" style={{ background: '#0d0d0d', border: '1px solid rgba(255,34,0,0.3)', borderRadius: '14px', padding: '16px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', textDecoration: 'none' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#ff2200' }}>Instagram</span>
              <span style={{ fontSize: '12px', color: '#a0a0a0' }}>@tanji__off</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer className="footer-outer" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '56px 24px 36px', background: '#050505' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '40px', marginBottom: '40px' }}>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #ff2200', flexShrink: 0 }}>
                  <Image src="/logo.jpg" alt="JCANFLY" width={34} height={34} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <span style={{ fontWeight: 800, fontSize: '17px', color: '#ffffff' }}>JCANFLY</span>
              </div>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6, margin: 0 }}>
                #1 Free Fire cheat provider. Trusted by 2,000+ players.
              </p>
            </div>

            <div>
              <h4 style={{ margin: '0 0 14px', fontSize: '12px', fontWeight: 700, color: '#ffffff', letterSpacing: '1px', textTransform: 'uppercase' }}>Products</h4>
              {['CHEETOS (Free)', 'J4X (Free)', 'FFH4X V6.0'].map((l) => (
                <a key={l} href="#products" style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '8px', textDecoration: 'none' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#a0a0a0')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#555')}
                >{l}</a>
              ))}
            </div>

            <div>
              <h4 style={{ margin: '0 0 14px', fontSize: '12px', fontWeight: 700, color: '#ffffff', letterSpacing: '1px', textTransform: 'uppercase' }}>Support</h4>
              {['Instagram Support', 'YouTube Channel', 'FAQ', 'Status Page'].map((l) => (
                <a key={l} href="#contact" style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '8px', textDecoration: 'none' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#a0a0a0')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#555')}
                >{l}</a>
              ))}
            </div>

            <div>
              <h4 style={{ margin: '0 0 14px', fontSize: '12px', fontWeight: 700, color: '#ffffff', letterSpacing: '1px', textTransform: 'uppercase' }}>Legal</h4>
              {['Terms of Service', 'Privacy Policy', 'DMCA Notice'].map((l) => (
                <a key={l} href="#" style={{ display: 'block', fontSize: '13px', color: '#555', marginBottom: '8px', textDecoration: 'none' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#a0a0a0')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#555')}
                >{l}</a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
            <p style={{ margin: 0, fontSize: '12px', color: '#444' }}>© 2025 JCANFLY. All rights reserved. For educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
