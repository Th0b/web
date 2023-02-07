//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import Photos from "layouts/Photos/Photos";
//Components
import Block from "components/Block/Block";

export default function Gallery() {
  const instagramUrl = "https://www.instagram.com/umzuzuwetoba/";
  return (
    <>
      <Header />
      <main>
        <Block>
          <h1>Fotografování</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Block>
        <Block>
          <h2>Galerie</h2>
          <p>
            Veškeré fotografie, najdete také na mém instragramu{" "}
            <a href={instagramUrl} target="_blank" rel="noreferrer noopener">
              @umzuzuwetoba
            </a>
            , který slouží jako má primární síť pro sdílení nově vyfocených
            fotografií.
          </p>
          <Photos />
        </Block>
      </main>
      <Footer />
    </>
  );
}
