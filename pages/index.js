import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Tob</title>
        <meta
          name="description"
          content="Webové stránka mistra Tobiáše Návrata"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Vítejte na mém webu</h1>
          <p>Ale ne dnes...</p>
        </div>
      </main>
    </>
  );
}
