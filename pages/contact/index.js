//Components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import ContactForm from "components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <h1>Kontakt</h1>
        <ContactForm/>
      </main>
      <Footer />
    </>
  );
}
