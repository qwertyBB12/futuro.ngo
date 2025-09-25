// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph defaults */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futuro.ngo" />
        <meta property="og:title" content="Futuro — Where Global Impact Takes Shape" />
        <meta
          property="og:description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />
        <meta property="og:image" content="https://futuro.ngo/OG_Futuro_Square.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="Futuro: Where Global Impact Takes Shape" />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Futuro — Where Global Impact Takes Shape" />
        <meta
          name="twitter:description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />
        <meta name="twitter:image" content="https://futuro.ngo/OG_Futuro_Square.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
