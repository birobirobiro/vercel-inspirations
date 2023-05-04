// @ts-ignore
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A collection of websites inspired by Vercel"
        />
        <title>Vercel Inspirations</title>
        <meta
          name="description"
          content="A collection of websites inspired by Vercel"
        />

        <meta
          property="og:url"
          content="https://vercel-inspirations.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vercel Inspirations" />
        <meta
          property="og:description"
          content="A collection of websites inspired by Vercel"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/hRsjWj0/preview.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="vercel-inspirations.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://vercel-inspirations.vercel.app/"
        />
        <meta name="twitter:title" content="Vercel Inspirations" />
        <meta
          name="twitter:description"
          content="A collection of websites inspired by Vercel"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/hRsjWj0/preview.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
