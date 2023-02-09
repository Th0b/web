//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import Repositories from "layouts/Repositories/Repositories";
import GithubCalendar from "layouts/GithubCalendar/GithubCalendar";
//Components
import Block from "components/Block/Block";
import PageHead from "components/PageHead/PageHead";
//Constants
import * as Constants from "constants";

export default function Projects() {
  return (
    <>
      <PageHead title="IT" />
      <Header />
      <main>
        <Block>
          <h1>IT</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Block>
        <Block>
          <h2>Github aktivita</h2>
          <GithubCalendar />
        </Block>
        <Block>
          <h2>Projekty</h2>
          <p>
            Zde se nachází mé open source projekty, uveřejněné na mém profilu{" "}
            <a
              href={Constants.GITHUB_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{Constants.GITHUB_USERNAME}
            </a>{" "}
            na platformě GitHub. Ocením každou zpětnou vazbu a pokud máš
            jakkýkoliv nápad na zlepšení, uvítám ho. Pro více informací o daném
            projektu stačí projekt rozkliknout a v angličtině je možné si pak
            prohlédnout jeho postupný vývoj.
          </p>
          <Repositories />
        </Block>
      </main>
      <Footer />
    </>
  );
}
