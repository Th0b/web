//Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
//Components
import Reaptcha from "reaptcha";
//Styles
import styles from "./styles/ContactForm.module.sass";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formValidation, setFormValidation] = useState({ reaptcha: false });
  const [alert, setAlert] = useState({
    type: null,
    message: null,
    visible: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    validateForm(e.target.id, e.target.type);
  };

  const validateForm = (name, type) => {
    console.log(type, name);
    let correct;
    if (type === "email") {
      correct = validator.isEmail(form[name]);
    } else if (type === "text" || type === "textarea") {
      correct = !validator.isEmpty(form[name]);
    }
    if (correct) {
      setFormValidation({ ...formValidation, [name]: true });
    } else {
      setFormValidation({ ...formValidation, [name]: false });
    }
    console.log(form);
    console.log(formValidation);
  };

  const submit = () => {
    if (
      formValidation.firstName &&
      formValidation.lastName &&
      formValidation.email &&
      formValidation.subject &&
      formValidation.message &&
      formValidation.reaptcha
    ) {
      console.log("Odesláno");
    } else {
      let message = "Zkontrolujte prosím ";
      if (!formValidation.firstName) message += " jméno";
      if (!formValidation.lastName) message += " příjmení";
      if (!formValidation.email) message += " email";
      if (!formValidation.subject) message += " předmět";
      if (!formValidation.message) message += " zprávu";
      if (!formValidation.reaptcha) message += " reacptchu";
      setAlert({ type: "warning", message: message, visible: true });
      console.log(alert);
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          id="firstName"
          data-valid={formValidation?.firstName}
          className={styles.input}
          value={form?.firstName}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder=""
        />
        <div className={styles.cut}></div>
        <label for="firstName" className={styles.placeholder}>
          Jméno
        </label>
      </div>
      <br />
      <div className={styles.inputContainer}>
        <input
          id="lastName"
          data-valid={formValidation?.lastName}
          className={styles.input}
          value={form?.lastName}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder=""
        />
        <div className={styles.cut}></div>
        <label for="lastName" className={styles.placeholder}>
          Příjmení
        </label>
      </div>
      <br />
      <div className={styles.inputContainer}>
        <input
          id="email"
          data-valid={formValidation?.email}
          className={styles.input}
          value={form?.email}
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder=""
        />
        <div className={styles.cut}></div>
        <label for="email" className={styles.placeholder}>
          Email
        </label>
      </div>
      <br />
      <div className={styles.inputContainer}>
        <input
          id="subject"
          data-valid={formValidation?.subject}
          className={styles.input}
          value={form?.subject}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder=""
        />
        <div className={styles.cut}></div>
        <label for="subject" className={styles.placeholder}>
          Předmět
        </label>
      </div>
      <br />
      <div className={styles.inputContainer}>
        <textarea
          id="message"
          data-valid={formValidation?.message}
          className={styles.textarea}
          value={form?.message}
          onChange={(e) => handleChange(e)}
          placeholder=""
        />
        <div className={styles.cut}></div>
        <label for="message" className={styles.placeholder}>
          Zpráva
        </label>
      </div>
      <br />
      <Reaptcha
        className={styles.reaptcha}
        sitekey="6LeptfwiAAAAAIlsIucO6DVV5-6qne4saQjlv2Hx"
        onVerify={() =>
          setFormValidation({ ...formValidation, reaptcha: true })
        }
      />
      <input
        className={styles.submit}
        type="button"
        value="Odeslat"
        onClick={() => submit()}
      />
    </form>
  );
}
