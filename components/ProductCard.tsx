import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Status uses only palette colours
  const statusMap = {
    online:   { text: '#ffcc00', dot: '#ffcc00', bg: 'rgba(255,204,0,0.08)',  border: 'rgba(255,204,0,0.25)' },
    updating: { text: '#ffffff', dot: '#ffffff', bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.18)' },
    offline:  { text: '#ff2200', dot: '#ff2200', bg: 'rgba(255,34,0,0.08)',   border: 'rgba(255,34,0,0.25)' },
  };
  const sc = statusMap[product.status];

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} style={{ color: i < Math.floor(product.rating) ? '#ffcc00' : '#333', fontSize: '12px' }}>★</span>
  ));

  return (
    <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product-card" style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Thumbnail */}
        <div style={{ height: '190px', background: '#111', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {product.thumbnail ? (
            <Image src={product.thumbnail} alt={product.name} fill style={{ objectFit: 'cover', opacity: 0.9 }} sizes="(max-width: 768px) 100vw, 33vw" />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '48px', color: '#ff2200', fontWeight: 900 }}>J</span>
            </div>
          )}
          {product.thumbnail && (
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 55%)' }} />
          )}

          {/* FREE badge — yellow, with green NEW tag */}
          {product.free && (
            <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#ffcc00', color: '#050505', borderRadius: '100px', padding: '4px 12px', fontSize: '11px', fontWeight: 800, zIndex: 2, display: 'flex', alignItems: 'center', gap: '4px' }}>
              FREE
              {product.isNew && <span style={{ color: '#00cc55' }}>(NEW)</span>}
            </div>
          )}
          {product.badge && !product.free && (
            <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#ff2200', color: '#ffffff', borderRadius: '100px', padding: '4px 10px', fontSize: '11px', fontWeight: 700, zIndex: 2 }}>
              {product.badge}
            </div>
          )}

          {/* Status badge */}
          <div style={{ position: 'absolute', top: '10px', right: '10px', background: sc.bg, border: `1px solid ${sc.border}`, borderRadius: '100px', padding: '3px 10px', fontSize: '11px', color: sc.text, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px', zIndex: 2, backdropFilter: 'blur(8px)' }}>
            <span style={{ width: '5px', height: '5px', background: sc.dot, borderRadius: '50%', display: 'inline-block' }} />
            {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Game label — red */}
          <span style={{ fontSize: '11px', color: '#ff2200', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
            {product.game}
          </span>

          {/* Name — white */}
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>
            {product.name}
          </h3>

          {/* Description — muted */}
          <p style={{ margin: 0, fontSize: '13px', color: '#a0a0a0', lineHeight: 1.5, flexGrow: 1 }}>
            {product.description.slice(0, 88)}...
          </p>

          {/* Rating — yellow stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div>{stars}</div>
            <span style={{ fontSize: '12px', color: '#555' }}>{product.rating}</span>
          </div>

          {/* Price + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
            {/* FREE price — yellow | paid — white */}
            <span style={{ fontSize: '22px', fontWeight: 900, color: product.free ? '#ffcc00' : '#ffffff' }}>
              {product.free ? 'FREE' : `$${product.price.toFixed(2)}`}
            </span>

            {/* Button — red for paid, yellow text on dark for free download */}
            <span style={{ background: product.free ? '#ffcc00' : '#ff2200', color: '#050505', borderRadius: '100px', padding: '8px 16px', fontSize: '12px', fontWeight: 800 }}>
              {product.free ? 'Download' : 'Buy Now'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
