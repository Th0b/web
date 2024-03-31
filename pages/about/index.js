//Hooks
import { useEffect, useState } from "react";
//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import ContactForm from "layouts/ContactForm/ContactForm";
//Components
import Block from "components/Block/Block";
import PageHead from "components/PageHead/PageHead";
//Constants
import Constants from "/constants";

export default function About() {
  //Because recaptcha loading
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <PageHead title="O mně" />
      <Header />
      <main>
        <Block>
          <h1>O mně</h1>
          <p>
            Jsem mladý, věřím že i potenciální bakalářský student informačních
            technologií se zájmem o síťové technologie a kyberbezpečnost. To
            však není mým jediným zájmem a mimo ně tvoří neopominutelnou část
            mnou stráveného volného času programování a fotografování. Více se
            dočteš v jednotlivých sekcích věnovaných danému oboru.
          </p>
          <p>
            Jsem otevřený všem novým příležitostem a v případě zájmu o
            spolupráci, mě tak neváhej kontaktovat. Pokud bys mě chtěl podpořit,
            můžeš mi za pár korun třeba koupit horkou čokoládu{" "}
            <a
              href={Constants.BUYMEACOFFEE_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              zde
            </a>
            .
          </p>
        </Block>
        <Block>
          <h2>Kontaktuj mě</h2>
          <p>
            Zaujala tě má tvorba ať už v oblasti IT, nebo v rámci fotografování?
            Zanech mi zprávu pomocí formuláře, nebo mi napiš přímo na emailovou
            adresu{" "}
            <a href={"mailto: " + Constants.EMAIL_ADDRESS}>
              {Constants.EMAIL_ADDRESS}
            </a>
            , a já se ti ozvu během následujících dní.
          </p>
          {mounted && <ContactForm />}
        </Block>
      </main>
      <Footer />
    </>
  );
}
