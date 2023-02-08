//Hooks
import { useEffect, useState } from "react";
//Layouts
import Header from "layouts/Header/Header";
import Footer from "layouts/Footer/Footer";
import ContactForm from "layouts/ContactForm/ContactForm";
//Components
import Block from "components/Block/Block";

export default function About() {
  //Because recaptcha loading
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Block>
          <h1>O mně</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
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
          <h2>Kontaktní formulář</h2>
          {mounted && <ContactForm />}
        </Block>
      </main>
      <Footer />
    </>
  );
}
