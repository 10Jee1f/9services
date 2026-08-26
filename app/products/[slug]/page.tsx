import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { products } from '@/lib/products';
import Navbar from '@/components/Navbar';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  const statusMap = {
    online:   { text: '#ffcc00', bg: 'rgba(255,204,0,0.08)',  border: 'rgba(255,204,0,0.25)' },
    updating: { text: '#ffffff', bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.18)' },
    offline:  { text: '#ff2200', bg: 'rgba(255,34,0,0.08)',   border: 'rgba(255,34,0,0.25)' },
  };
  const sc = statusMap[product.status];

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} style={{ color: i < Math.floor(product.rating) ? '#ffcc00' : '#333', fontSize: '18px' }}>★</span>
  ));

  return (
    <div style={{ background: '#050505', minHeight: '100vh', color: '#ffffff' }}>
      <Script src="https://quge5.com/88/tag.min.js" data-zone="269687" strategy="afterInteractive" data-cfasync="false" />
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 24px 80px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '40px', fontSize: '13px' }}>
          <Link href="/" style={{ color: '#555', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: '#333' }}>›</span>
          <Link href="/#products" style={{ color: '#555', textDecoration: 'none' }}>Products</Link>
          <span style={{ color: '#333' }}>›</span>
          <span style={{ color: '#a0a0a0' }}>{product.name}</span>
        </div>

        <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: '48px', alignItems: 'start' }}>

          {/* ── Left ── */}
          <div>
            {/* Image */}
            <div className="product-detail-image" style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', height: '340px', position: 'relative', overflow: 'hidden', marginBottom: '24px' }}>
              {product.thumbnail ? (
                <Image src={product.thumbnail} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="50vw" priority />
              ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '80px', color: '#ff2200', fontWeight: 900 }}>J</span>
                </div>
              )}
              {product.thumbnail && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.5) 0%, transparent 50%)' }} />}
              {product.free && (
                <div style={{ position: 'absolute', top: '18px', left: '18px', background: '#ffcc00', color: '#050505', borderRadius: '100px', padding: '6px 16px', fontSize: '13px', fontWeight: 800, zIndex: 2 }}>
                  FREE DOWNLOAD
                </div>
              )}
            </div>

            {/* What's included */}
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ margin: '0 0 20px', fontSize: '15px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                What&apos;s Included
              </h3>
              <div className="product-features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 16px' }}>
                {product.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#ffffff', fontWeight: 900, flexShrink: 0 }}>✓</div>
                    <span style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="product-detail-right" style={{ position: 'sticky', top: '80px' }}>
            <p style={{ fontSize: '11px', color: '#ff2200', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px' }}>{product.game}</p>
            <h1 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-1px', margin: '0 0 16px', color: '#ffffff' }}>{product.name}</h1>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div>{stars}</div>
              <span style={{ fontWeight: 700, color: '#ffcc00' }}>{product.rating}</span>
              <span style={{ color: '#555', fontSize: '13px' }}>({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Status */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: sc.bg, border: `1px solid ${sc.border}`, borderRadius: '100px', padding: '5px 14px', fontSize: '12px', color: sc.text, fontWeight: 600, marginBottom: '22px' }}>
              <span style={{ width: '6px', height: '6px', background: sc.text, borderRadius: '50%', display: 'inline-block' }} />
              {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
            </div>

            <p style={{ fontSize: '14px', color: '#a0a0a0', lineHeight: 1.7, marginBottom: '28px' }}>{product.description}</p>

            {/* Action box */}
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,34,0,0.2)', borderRadius: '18px', padding: '26px', marginBottom: '18px' }}>
              {/* Price */}
              <div style={{ marginBottom: '20px' }}>
                <span className="product-price" style={{ fontSize: '44px', fontWeight: 900, letterSpacing: '-2px', color: product.free ? '#ffcc00' : '#ffffff' }}>
                  {product.free ? 'FREE' : `$${product.price.toFixed(2)}`}
                </span>
              </div>

              {/* CTA */}
              {product.downloadLink ? (
                <a href={`/download/${product.slug}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', marginBottom: '10px', display: 'flex' }}>
                  {product.free ? 'Download Free Now' : `Buy Now — $${product.price.toFixed(2)}`}
                </a>
              ) : (
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', marginBottom: '10px' }}>
                  Purchase Now — ${product.price.toFixed(2)}
                </button>
              )}
              <a href="https://www.youtube.com/@TANJIMENA" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Watch on YouTube</a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={{ marginTop: '80px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-1px', marginBottom: '20px', color: '#ffffff' }}>
              Related <span style={{ color: '#ff2200' }}>Products</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '18px' }}>
              {related.map((rp) => {
                const sc2 = statusMap[rp.status];
                return (
                  <Link key={rp.slug} href={`/products/${rp.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="product-card" style={{ overflow: 'hidden' }}>
                      <div style={{ height: '110px', position: 'relative', background: '#111' }}>
                        {rp.thumbnail
                          ? <Image src={rp.thumbnail} alt={rp.name} fill style={{ objectFit: 'cover', opacity: 0.85 }} sizes="33vw" />
                          : <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '32px', color: '#ff2200' }}>J</span></div>}
                        {rp.free && <div style={{ position: 'absolute', top: '8px', left: '8px', background: '#ffcc00', color: '#050505', borderRadius: '100px', padding: '3px 10px', fontSize: '11px', fontWeight: 800, zIndex: 2 }}>FREE</div>}
                      </div>
                      <div style={{ padding: '14px' }}>
                        <p style={{ margin: '0 0 4px', fontSize: '10px', color: '#ff2200', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{rp.game}</p>
                        <p style={{ margin: '0 0 10px', fontWeight: 700, fontSize: '13px', color: '#ffffff' }}>{rp.name}</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '16px', fontWeight: 900, color: rp.free ? '#ffcc00' : '#ffffff' }}>{rp.free ? 'FREE' : `$${rp.price.toFixed(2)}`}</span>
                          <span style={{ background: sc2.bg, border: `1px solid ${sc2.border}`, borderRadius: '100px', padding: '2px 9px', fontSize: '10px', color: sc2.text, fontWeight: 600 }}>{rp.status}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
