import Reaptcha from 'reaptcha';
import styles from "./styles/ContactForm.module.sass"

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <label htmlFor="firstName">Jméno:</label>
      <br />
      <input id="firstName" type="text" placeholder="Jméno"></input>
      <br />
      <label htmlFor="lastName">Příjmení:</label>
      <br />
      <input id="lastName" type="text" placeholder="Příjmení"></input>
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input id="email" type="email" placeholder="Email"></input>
      <br />
      <label htmlFor="subject">Předmět:</label>
      <br />
      <input id="subject" type="text" placeholder="Předmět"></input>
      <br />
      <label htmlFor="message">Zpráva:</label>
      <br />
      <textarea id="message" type="text" placeholder="Zpráva" />
      <br />
      <Reaptcha className={styles.reaptcha} sitekey="6LeptfwiAAAAAIlsIucO6DVV5-6qne4saQjlv2Hx"/>
      <input className={styles.submit} type="submit" value="Odeslat" />
    </form>
  );
}
