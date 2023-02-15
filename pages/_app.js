//Components
import { GoogleAnalytics } from "nextjs-google-analytics";
//Styles
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics
        gaMeasurementId="G-LPQ6KHGMG7"
        strategy="lazyOnload"
        trackPageViews
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
