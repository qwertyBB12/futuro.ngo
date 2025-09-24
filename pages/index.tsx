// pages/index.tsx

import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Plasmic imports
import { PlasmicHomepage } from "../plasmic/futuro_ngo/PlasmicHomepage";
import { GlobalContextsProvider } from "../plasmic/futuro_ngo/PlasmicGlobalContexts";
import { PageParamsProvider__ } from "../plasmic/futuro_ngo/PlasmicUtils";

export default function Homepage() {
  const router = useRouter();

  return (
    <GlobalContextsProvider>
      <>
        <Head>
          <title>Futuro | Where Global Impact Takes Shape</title>
          <meta
            name="description"
            content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
          />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://futuro.ngo/" />
          <meta
            property="og:title"
            content="Futuro | Where Global Impact Takes Shape"
          />
          <meta
            property="og:description"
            content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
          />
          <meta property="og:image" content="https://futuro.ngo/OG_Futuro.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Futuro | Where Global Impact Takes Shape"
          />
          <meta
            name="twitter:description"
            content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
          />
          <meta
            name="twitter:image"
            content="https://futuro.ngo/OG_Futuro.png"
          />
        </Head>

        <PageParamsProvider__
          route={router?.pathname}
          params={router?.query}
          query={router?.query}
        >
          <PlasmicHomepage />
        </PageParamsProvider__>
      </>
    </GlobalContextsProvider>
  );
}
