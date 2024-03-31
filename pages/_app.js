//Site measure
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
//Styles
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default MyApp;
