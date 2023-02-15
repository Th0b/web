//Components
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LPQ6KHGMG7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LPQ6KHGMG7');
        `}
      </Script>
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
      </body>
    </Html>
  );
}
