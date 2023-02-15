//Components
import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Webové stránka mistra Tobiáše Návrata"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleAnalytics gaMeasurementId="G-LPQ6KHGMG7" strategy="lazyOnload" trackPageViews />
      </body>
    </Html>
  );
}
