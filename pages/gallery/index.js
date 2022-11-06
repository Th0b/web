//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Photos from "../../components/Gallery/Photos"

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1>Galerie</h1>
        <Photos />
      </main>
      <Footer/>
    </>
  );
}
