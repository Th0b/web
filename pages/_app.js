//Site measure
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
//Styles
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaMeasurementId="G-LPQ6KHGMG7" trackPageViews />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
