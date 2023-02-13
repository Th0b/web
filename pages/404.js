//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
//Components
import Link from "next/link";
import Block from "components/Block/Block";
//Styles
import styles from "styles/404.module.sass";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Block>
          <h1>Stránka nenalezena</h1>
          <div className={styles.errorContainer}>
            <img src="errorCross.svg" alt="Error" className={styles.errorCross} />
            <div className={styles.error}>
              Stránka, kterou hledáš neexistuje. Zkus se vrátit na <Link href="/">domovskou stránku</Link> nebo využij menu v hlavičce.
            </div>
          </div>
        </Block>
      </main>
      <Footer />
    </>
  );
}
