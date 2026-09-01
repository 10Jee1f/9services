'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Loads an ad script ONLY on FFH4X V6.0 pages (product page + download flow).
// Everywhere else it does nothing.
export default function FFH4XAdScript() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    if (!pathname.includes('ffh4x-v6')) return;

    if (document.getElementById('ffh4x-cloudfront-1634185')) return;
    const s = document.createElement('script');
    s.id = 'ffh4x-cloudfront-1634185';
    s.setAttribute('data-cfasync', 'false');
    s.src = '//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1634185';
    document.body.appendChild(s);
  }, [pathname]);

  return null;
}
