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
            fotografie a videa vytvořená drony. Možnosti takového dronu se mi
            zdály obrovské a já se tak po dlouhém zvažování rozhodl pořídit
            svého drona DJI Mini 2. S ním jsem se naučil a vytvořil několik
            nádherných fotek a videí. Ačkoliv byly možnosti pozic, úhlů a
            kompozic obrovské, omezovaly mě zákony, které jeho využití dosti
            omezovaly a spíš než focení jsem tak řešil je.
          </p>
          <p>
            Proto jsem se rozhodl držet více při zemi. V mém okolí tehdy navíc
            nebyl nikdo, kdo by se o focení více zajímal a chyběli mi fotky ze
            skautských a rodinných akcí. Pořídil jsem si proto svou
            bezzrcadlovku Sony A6100 společně se setovým objektivem a rozhodl se
            do focení plně ponořit. Absolvoval jsem kurz na základy focení a můj
            foťák jsem začal brát na každou všední i nevšední událost.
          </p>
          <p>
            Dnes mě nejvíc baví hraní se světlem a barvami. Využívání stínů,
            slunečních paprsků či svitu měsíce je něco úžasného. Jinak ale fotím
            rád cokoliv, co se mi dostane pod objektiv, ať už se jedná o fotky
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
            Mé portfolio najdeš na mém instagramu{" "}
            <a
              href={Constants.INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{Constants.INSTAGRAM_USERNAME}
            </a>
            , který slouží jako mé primární místo pro sdílení mých výtvorů.
          </p>
          <Photos quantity={50} />
        </Block>
      </main>
      <Footer />
    </>
  );
}
