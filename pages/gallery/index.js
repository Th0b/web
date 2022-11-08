//Components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Photos from "components/Photos/Photos";

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1>Galerie</h1>
        <Photos />
      </main>
      <Footer />
    </>
  );
}
