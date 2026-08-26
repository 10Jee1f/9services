'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AdScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Only inject ads on pages other than the homepage.
    // NOTE: gated inside useEffect (not during render) because usePathname()
    // returns null during SSR — gating render output on it would cause a
    // hydration mismatch.
    if (!pathname || pathname === '/') return;

    const inject = (script: { id?: string; src?: string; html?: string; async?: boolean; dataZone?: string }) => {
      const key = script.id || script.src || script.html || '';
      if (document.getElementById(key)) return;
      const s = document.createElement('script');
      if (script.id) s.id = script.id;
      s.setAttribute('data-cfasync', 'false');
      if (script.src) {
        s.src = script.src;
        if (script.async) s.async = true;
        if (script.dataZone) s.setAttribute('data-zone', script.dataZone);
      }
      if (script.html) s.innerHTML = script.html;
      document.body.appendChild(s);
    };

    // 5gvci tag
    inject({ src: 'https://5gvci.com/act/files/tag.min.js?z=11652780', async: true });
    // n6wxm vignette (fullscreen interstitial)
    inject({
      id: 'monetag-vignette',
      html: `(function(s){s.dataset.zone='11652781',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`,
    });
  }, [pathname]);

  return null;
}
