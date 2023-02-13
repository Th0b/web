//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import GithubCalendar from "layouts/GithubCalendar/GithubCalendar";
import Photos from "layouts/Photos/Photos";
//Components
import Block from "components/Block/Block";
import PageHead from "components/PageHead/PageHead";
import Link from "next/link";
//Styles
import styles from "styles/index.module.sass";

export default function Home() {
  return (
    <>
      <PageHead title="Tobiáš Návrat" />
      <Header />
      <main>
        <Block>
          <h1>Vítej</h1>
          <p>
            Jsem mladý, věřím že i potenciální student maturitního ročníku
            informačních technologií se zaměřením na síťové technologie. Sítě
            však nejsou mým jediným zájmem a mimo ně tvoří neopominutelnou část
            mnou stráveného volného času programování a fotografování.
          </p>
        </Block>
        <Block name="IT" url="/it">
          <p>
            V IT mě nejvíce zaujala tvorba webů a webových aplikací, které mají
            nějaký přínos jak pro mě při jejich tvorbě, tak pro ostatní při
            jejich využívání. Rád přispívám do různorodých open source projektů,
            stejně tak, jak je rád sám vytvářím.
          </p>
          <GithubCalendar />
          <p>
            Neustále se v této oblasti vzdělávám a chci znát a ovládat víc a
            víc. Více o mně a IT najdeš <Link href="/it">zde</Link>.
          </p>
        </Block>
        <Block name="Fotografování" url="/photography">
          <p>
            Mimo IT se také rád věnuji focení. Jedná se spíš o koníček, než
            profesionální portfolio, přesto se ale snažím každou fotkou posouvat
            a dělat ji unikátní. Rád si hraji s přirozeným světlem či barvami a
            fotím po večerech a nocích. Více o mně a fotografování najdeš{" "}
            <Link href="/photography">zde</Link>.
          </p>
          <Photos quantity="4" />
        </Block>
      </main>
      <Footer />
    </>
  );
}
