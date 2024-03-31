//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import Photos from "layouts/Photos/Photos";
//Components
import Block from "components/Block/Block";
import PageHead from "components/PageHead/PageHead";
//Constants
import Constants from "/constants";

export default function Galllery() {
  return (
    <>
      <PageHead title="Fotografování" />
      <Header />
      <main>
        <Block>
          <h1>Fotografování</h1>
          <p>
            K fotografování jsem se dostal pár let zpátky, kdy mě zaujaly
            fotografie a videa tvořené drony. Možnosti takového dronu mi tehdy
            nechali oči v úžasu a já se tak rozhodl pořídit svého prvního drona
            DJI Mini 2. S ním jsem si užil mnohé, od tvorby nezapomenutelncýh
            fotografií krajin po dokumentaci táborů. Časem jsem zjistil, že bych
            se ale občas držel více při zemi.
          </p>
          <p>
            Proto jsem se začal poohlížet po fotoaparátu. V mém okolí tehdy
            navíc nebyl nikdo, kdo by se o focení více zajímal a chyběli mi
            fotky ze skautských a rodinných akcí. Pořídil jsem si proto svou
            první bezzrcadlovku Sony A6100 a rozhodl se do focení plně ponořit.
            Absolvoval jsem kurz na základy focení a můj foťák jsem začal brát
            na každou všední i nevšední událost.
          </p>
          <p>
            Dnes mě nejvíc baví hraní se světlem a barvami. Využívání stínů,
            slunečních paprsků či svitu měsíce je něco úžasného. Fotím rád
            cokoliv, co se mi dostane pod objektiv, ať už se jedná o fotky
            krajin, ulic či lidí.
          </p>
          <p>
            Fotky z dronu či foťáku nakonec upravuji v Adobe Lightroom, kde se
            je snažím dotáhnout k dokonalosti.
          </p>
        </Block>
        <Block>
          <h2>Galerie</h2>
          <p>
            Útržky mého portfolia najdeš na mém instagramu{" "}
            <a
              href={Constants.INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{Constants.INSTAGRAM_USERNAME}
            </a>
            , kde sdílím aktuální tvorbu. Celé porfolio nalezneš na webu{" "}
            <a
              href={Constants.PIWIGO_PORTFOLIO}
              target="_blank"
              rel="noreferrer noopener"
            >
              zde
            </a>
            .
          </p>
          <Photos quantity={50} />
        </Block>
      </main>
      <Footer />
    </>
  );
}
