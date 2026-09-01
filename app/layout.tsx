import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { AgentationGuard } from '@/components/AgentationGuard';
import { HappySeedsWatermark } from '@/components/HappySeedsWatermark';
import AdScripts from '@/components/AdScripts';
import './globals.css';
import jsonMetadata from '../metadata.json';

export const metadata: Metadata = jsonMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Y9HDhrquS7yJExqvlReVPBHDlxhrpO2Y6SDeID8xJYU" />
        <meta name="admaven-placement" content="Bpdw8pda8" />
        <meta name="monetag" content="187d10037653078aa29bb40a1964d982" />
        <Script src="https://5gvci.com/act/files/tag.min.js?z=11579889" data-cfasync="false" async />
        <Script id="monetag-inline" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `(function(s){s.dataset.zone='11579892',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))` }} />
        <Script id="monetag-nap5k-2" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `(function(s){s.dataset.zone='11652789',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))` }} />
        <script data-cfasync="false" src="/sw.js"></script>
        <script data-cfasync="false" src="//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1634185"></script>
        <script data-cfasync="false" src="//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1634186"></script>
        {process.env.NODE_ENV === 'production' && (
          <Script
            async
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      </head>
      <body className="antialiased">
        {children}
        <AdScripts />
        <HappySeedsWatermark />
        <AgentationGuard />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
