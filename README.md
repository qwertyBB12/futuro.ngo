This is a Next.js project bootstrapped with [`create-plasmic-app`](https://www.npmjs.com/package/create-plasmic-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open your browser to see the result.

You can start editing your project in Plasmic Studio. The page auto-updates as you edit the project.

## Learn More

With Plasmic, you can enable non-developers on your team to publish pages and content into your website or app.

To learn more about Plasmic, take a look at the following resources:

- [Plasmic Website](https://www.plasmic.app/)
- [Plasmic Documentation](https://docs.plasmic.app/learn/)
- [Plasmic Community Forum](https://forum.plasmic.app/)

You can check out [the Plasmic GitHub repository](https://github.com/plasmicapp/plasmic) - your feedback and contributions are welcome!

## Open Graph and Social Sharing

This repository includes custom OG images and meta tags defined in the Next.js codebase to ensure consistent previews across social platforms. The images `public/OG_Futuro.png` (1200×630) and `public/OG_Futuro_square.png` (1200×1200) are referenced in `_document.js` for site-wide defaults. The homepage (`pages/index.tsx`) includes its own `<Head>` override that sets the wide cinematic OG image with 1200×630 dimensions.

These tags are maintained in the Next.js code, not in Plasmic Studio. When syncing or publishing from Plasmic, be careful not to overwrite `_document.js` or `pages/index.tsx`. Future updates should preserve these files to retain the OG metadata setup.
