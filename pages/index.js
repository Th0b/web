//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import GithubCalendar from "layouts/GithubCalendar/GithubCalendar";
import Photos from "layouts/Photos/Photos";
//Components
import Block from "components/Block/Block";
import PageHead from "components/PageHead/PageHead";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageHead title="Tobiáš Návrat" />
      <Header />
      <main>
        <Block>
          <h1>Vítej mistře</h1>
          <p>
            Jsem mladý, věřím že i potenciální bakalářský student informačních
            technologií se zájmem o síťové technologie a kyberbezpečnost. To
            však není mým jediným zájmem a mimo ně tvoří neopominutelnou část
            mnou stráveného volného času programování a fotografování.
          </p>
        </Block>
        <Block name="IT" url="/it">
          <p>
            V IT mě nejvíce zaujal návrh a tvorba webů a webových aplikací,
            které mají nějaký přínos jak pro mě při jejich tvorbě, tak pro
            ostatní při jejich využívání. Jsem velkým fanouškem open source a
            krom toho, že z něho často mnohé čerpán, se snažím čas od času také
            přiložit ruku k dílu a něčím přispět.
          </p>
          <GithubCalendar />
          <p>
            Neustále se v této oblasti vzdělávám a vidím v ní obrovský
            potenciál. Více o mně a IT najdeš <Link href="/it">zde</Link>.
          </p>
        </Block>
        <Block name="Fotografování" url="/photography">
          <p>
            Když zrovna pod rukama nemám klávesnici, je velká šance že to bude
            foťák. Přesto, že se jedná spíš o koníček, než profesionální
            portfolio, snažím každou fotkou posouvat a dělat ji unikátní. Rád
            dokumentuji unikátní chvíle a místa, hraju si se světlem, barvami si
            a fotím po večerech a nocích. Více o mně a fotografování najdeš{" "}
            <Link href="/photography">zde</Link>.
          </p>
          <Photos quantity={10} />
        </Block>
      </main>
      <Footer />
    </>
  );
}
