//Components
import Link from "next/link";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Něco se nepovedlo</h1>
          <p>Zkus se vrátit na domovskou stránku <Link href="/">tady</Link></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
