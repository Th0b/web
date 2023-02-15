//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import Repositories from "layouts/Repositories/Repositories";
import GithubCalendar from "layouts/GithubCalendar/GithubCalendar";
import Skills from "layouts/Skills/Skills";
//Components
import Block from "components/Block/Block";
import PageHead from "components/PageHead/PageHead";
//Constants
import Constants from "/constants";

export default function Projects() {
  return (
    <>
      <PageHead title="IT" />
      <Header />
      <main>
        <Block>
          <h1>IT</h1>
          <p>
            IT mě fascinovalo již od mala. Na základní škole jsem navštěvoval
            počítačový kroužek, kde jsem poprvé viděl HTML a vytvořil svůj první
            web. Když jsem se poté rozhodoval kam na střední, IT pro mě byla
            relativně jasná volba.
          </p>
          <p>
            Později jsem si musel zvolit zaměření, kterým se budu ubírat a
            jelikož mě zajímalo fungování internetu, sítí a jejich bezpečnost,
            rozhodl jsem pro ně.
          </p>
          <p>
            Dnes se nejvíc věnuji vytváření webů a webových aplikací. Pracuji
            jako junior front-end developer ve firmě Brainsov Solutions, kde
            vyvíjíme převážně aplikace pro obchodní centra. Také spravuji
            několik wordpress webů neziskovým organizacím a sám se snažím
            vyvíjet nejen různé open source webové aplikace.
          </p>
        </Block>
        <Block>
          <h2>Aktivita na Githubu</h2>
          <GithubCalendar />
        </Block>
        <Block>
          <h2>Dovednosti</h2>
          <Skills />
        </Block>
        <Block>
          <h2>Open source projekty</h2>
          <p>
            Většina mých projektů je open source a je uveřejněna na mém profilu{" "}
            <a
              href={Constants.GITHUB_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{Constants.GITHUB_USERNAME}
            </a>{" "}
            na platformě GitHub. Ocením každou zpětnou vazbu a nápady na jejich
            zlepšení. Můžeš otevřít issue, nebo rovnou vytvořit pull request.
          </p>
          <Repositories />
        </Block>
      </main>
      <Footer />
    </>
  );
}
