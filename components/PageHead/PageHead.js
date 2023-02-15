import Head from "next/head";
import Script from "next/script"

const PageHead = ({ title, description }) => {
  return (
    <Head>
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
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default PageHead;
