//Styles
import styles from "../styles/Index.module.sass";
//Components
import Header from "../components/Header";

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
      <footer>Copyright&copy;2022</footer>
    </>
  );
}
