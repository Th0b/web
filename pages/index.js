//Styles
import styles from "styles/Index.module.sass";
//Components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Vítejte na mém webu</h1>
          <p>Ale ne dnes...</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
