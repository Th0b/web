//Components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Repositories from "components/Repositories/Repositories";

export default function Projects() {
  const githubUrl="https://github.com/Th0b"
  return (
    <>
      <Header />
      <main>
        <h1>Projekty</h1>
        <p>Zde se nachází mé open source projekty, uveřejněné na mém profilu <a href={githubUrl}  target="_blank" rel="noreferrer noopener">@Th0b</a> na platformě GitHub. Ocením každou zpětnou vazbu a pokud máš jakkýkoliv nápad na zlepšení, uvítám ho. Pro více informací o daném projektu stačí projekt rozkliknout a v angličtině je možné si pak prohlédnout jeho postupný vývoj.
        </p>
        <Repositories />
      </main>
      <Footer />
    </>
  );
}
