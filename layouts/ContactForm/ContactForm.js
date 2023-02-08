//Hooks
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
//Components
import Reaptcha from "reaptcha";
//Styles
import styles from "./styles/ContactForm.module.sass";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "all",
  });

  const formOptions = {
    firstName: {
      required: "Jméno je potřeba vyplnit",
      pattern: {
        value: /[A-Z][a-z]*/,
        message: "Jméno musí začínat velkým písmenem",
      },
    },
    lastName: {
      required: "Příjmení je potřeba vyplnit",
      pattern: {
        value: /[A-Z][a-z]*/,
        message: "Jméno musí začínat velkým písmenem",
      },
    },
    email: {
      required: "Email je potřeba vyplnit",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Zadejte platný email",
      },
    },
    subject: {
      required: "Předmět je potřeba vyplnit",
    },
    message: {
      required: "Zprávu je potřeba vyplnit",
    },
  };

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          id="firstName"
          className={styles.input}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder=""
          {...register("firstName", formOptions.firstName)}
        />
        <div className={styles.cut}></div>
        <div  className={styles.errorCut}>{errors.firstName?.message}</div>
        <label for="firstName" className={styles.placeholder}>
          Jméno
        </label>
      </div>
      <div className={styles.inputContainer}>
        <input
          id="lastName"
          className={styles.input}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder=""
          {...register("lastName", formOptions.lastName)}
        />
        <div className={styles.cut}></div>
        <div  className={styles.errorCut}>{errors.lastName?.message}</div>
        <label for="lastName" className={styles.placeholder}>
          Příjmení
        </label>
      </div>
      <div className={styles.inputContainer}>
        <input
          id="email"
          className={styles.input}
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder=""
          {...register("email", formOptions.email)}
        />
        <div className={styles.cut}></div>
        <div  className={styles.errorCut}>{errors.email?.message}</div>
        <label for="email" className={styles.placeholder}>
          Email
        </label>
      </div>
      <div className={styles.inputContainer}>
        <input
          id="subject"
          className={styles.input}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder=""
          {...register("subject", formOptions.subject)}
        />
        <div className={styles.cut}></div>
        <div  className={styles.errorCut}>{errors.subject?.message}</div>
        <label for="subject" className={styles.placeholder}>
          Předmět
        </label>
      </div>
      <div className={styles.inputContainer}>
        <textarea
          id="message"
          className={styles.textarea}
          onChange={(e) => handleChange(e)}
          placeholder=""
          {...register("message", formOptions.message)}
        />
        <div className={styles.cut}></div>
        <div  className={styles.errorCut}>{errors.message?.message}</div>
        <label for="message" className={styles.placeholder}>
          Zpráva
        </label>
      </div>
      <Reaptcha
        className={styles.reaptcha}
        sitekey="6LeptfwiAAAAAIlsIucO6DVV5-6qne4saQjlv2Hx"
        onVerify={() =>
          setFormValidation({ ...formValidation, reaptcha: true })
        }
      />
      <input className={styles.submit} type="submit" value="Odeslat" />
    </form>
  );
}
