//Components
import Link from "next/link";
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import Block from "components/Block/Block";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Block>
          <h1>Stránka nenalezena</h1>
          <p>Zkus se vrátit na domovskou stránku <Link href="/">tady</Link></p>
        </Block>
      </main>
      <Footer />
    </>
  );
}
