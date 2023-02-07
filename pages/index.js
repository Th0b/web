//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import GithubCalendar from "layouts/GithubCalendar/GithubCalendar";
import Photos from "layouts/Photos/Photos";
import Skills from "layouts/Skills/Skills";
//Components
import Block from "components/Block/Block";
//Styles
import styles from "styles/index.module.sass";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Block>
          <h1>Vítej</h1>
          <p>
            Jsem mladý, věřím že i potenciální student maturitního ročníku
            informačních technologií. Věnuji se zaměření síťových technologií,
            ale programování tvoří neopominutelnou část mnou stráveného volného
            času.
          </p>
        </Block>
        <Block name="IT" url="/it">
          <p>
            Rád tvořím využitelné nejen webové aplikace, které mají nějaký
            přínos jak pro mě při jejich tvorbě, tak pro ostatní při jejich
            využívání.
          </p>
          <p>
            Většinu znalostí, které nyní mám jsem nabyl sám skrz různé
            dokumentace či tutoriály a proto jsem vždy neskutečně rád za každou
            zpětnou vazbu, která mi pomůže se nadále zlepšovat.
          </p>
          <GithubCalendar />
          <Skills />
        </Block>
        <Block name="Fotografování" url="/photography">
          <p>
            Mimo ajťačinu také rád fotím, jedná se spíš o koníček než nějaké
            profesionální portofolio, ale dělám to rád.
          </p>
          <Photos quantity="3"/>
        </Block>
      </main>
      <Footer />
    </>
  );
}
