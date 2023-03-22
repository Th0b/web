//Components
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Webové stránka mistra Tobiáše Návrata"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Tobiáš Návrat</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}