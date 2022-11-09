//Components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Photos from "components/Photos/Photos";

export default function Gallery() {
  const instagramUrl="https://www.instagram.com/umzuzuwetoba/"
  return (
    <>
      <Header />
      <main>
        <h1>Galerie</h1>
        <p>Veškeré fotografie, najdete také na mém instragramu <a href={instagramUrl}  target="_blank" rel="noreferrer noopener">@umzuzuwetoba</a>, který slouží jako má primární síť pro sdílení nově vyfocených fotografií.</p>
        <Photos />
      </main>
      <Footer />
    </>
  );
}
