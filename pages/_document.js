//Hooks
import { Html, Head, Main, NextScript } from "next/document";
//Components
import Title from "components/Title/Title";

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
        <Title />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
