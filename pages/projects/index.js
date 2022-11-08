//Components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Repositories from "components/Repositories/Repositories";

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <h1>Projekty</h1>
        <Repositories />
      </main>
      <Footer />
    </>
  );
}
