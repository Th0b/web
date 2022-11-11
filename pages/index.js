//Components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Zdravím tě a vítej na mém webu</h1>
        <p>
          Jsem mladý, věřím že i potenciální student maturitního ročníku
          informačních technologie. Věnuji se zaměření síťových technologií, ale
          programování tvoří neopominutelnou část mnou stráveného volného času.
        </p>
        <p>
          Rád tvořím smysluplné nejen webové aplikace, které mají nějaký přínos
          jak pro mě při jejich tvorbě, tak pro ostatní při jejich využívání.
        </p>
        <p>
          Mimo ajťačinu ale také rád fotím, jedná se spíš o koníček než nějaké
          profesionální portofolio, ale dělám to rád.
        </p>
        <p>
          Většinu znalostí, které nyní mám jsem získal sám skrz různé
          dokumentace či tutoriály a proto jsem vždy neskutečně rád za každou
          zpětnou vazbu, která mi pomáhá se dále zlepšovat v tom co dělám. Budu
          tak rád i za tvou.
        </p>
        <h2>Znalosti jazyků</h2>
        <ul>
          <li>HTML</li>
          <li>CSS (Sass)</li>
          <li>JavaScript (React, NextJs)</li>
          <li>C</li>
          <li>Python</li>
        </ul>
        <h2>Další znalosti</h2>
        <ul>
          <li>Git</li>
          <li>Cisco IOS</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
