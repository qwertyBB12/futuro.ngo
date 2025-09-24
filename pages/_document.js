// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* PNG favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Android / Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1B2A41" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://futuro.ngo/" />
        <meta property="og:site_name" content="Futuro" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fast.wistia.com" />
        <link rel="preconnect" href="https://embedwistia-a.akamaihd.net" />
    
    <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Futuro",
  "url": "https://futuro.ngo",
  "logo": "https://futuro.ngo/favicon-512x512.png",
  "sameAs": ["https://www.linkedin.com/", "https://x.com/"] 
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Futuro",
  "url": "https://futuro.ngo",
  "potentialAction":
  }
}
</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
