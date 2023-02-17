//Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecaptcha } from "react-hook-recaptcha";
//Utils
import { dataPost } from "utils/dataPost";
//Components
import Loading from "components/Loading/Loading";
//Constants
import Constants from "/constants";
//Styles
import styles from "./styles/ContactForm.module.sass";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const url = Constants.CONTACT_FORM_API;

  //Forms settings
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      recaptcha: false,
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
    recaptcha: {
      required: "Je potřeba potvrdit, že jsi člověk",
    },
  };

  //Recaptcha settings
  const sitekey = "6LeptfwiAAAAAIlsIucO6DVV5-6qne4saQjlv2Hx";
  const containerId = "recaptcha";
  const successCallback = (/*response*/) =>
    setValue("recaptcha", true, { shouldValidate: true });
  const expiredCallback = () =>
    setValue("recaptcha", false, { shouldValidate: true });
  useRecaptcha({
    containerId,
    successCallback,
    expiredCallback,
    sitekey,
    size: "normal",
  });

  const onSubmit = (data) => {
    dataPost(setStatus, url, data);
    console.log(data);
    console.log(result);
  };

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
        <div className={styles.errorCut}>{errors.firstName?.message}</div>
        <label htmlFor="firstName" className={styles.placeholder}>
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
        <div className={styles.errorCut}>{errors.lastName?.message}</div>
        <label htmlFor="lastName" className={styles.placeholder}>
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
        <div className={styles.errorCut}>{errors.email?.message}</div>
        <label htmlFor="email" className={styles.placeholder}>
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
        <div className={styles.errorCut}>{errors.subject?.message}</div>
        <label htmlFor="subject" className={styles.placeholder}>
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
        <div className={styles.errorCut}>{errors.message?.message}</div>
        <label htmlFor="message" className={styles.placeholder}>
          Zpráva
        </label>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.errorCut}>{errors.recaptcha?.message}</div>
        <div
          id={containerId}
          className="g-recaptcha"
          {...register("recaptcha", formOptions.recaptcha)}
        />
      </div>
      <button
        data-status={status}
        disabled={status === "loading" || status === "success"}
        className={styles.submit}
        type="submit"
      >
        {status === "" && <>Odeslat</>}
        {status === "loading" && <Loading />}
        {status === "error" && (
          <>
            <div className={styles.submitMessageHeader}>Formulář se nepodařilo odeslat</div>
            <div className={styles.submitMessageText}>
              Zkontroluj své internetové připojení a zkus to znovu
            </div>
          </>
        )}
        {status === "success" && (
          <>
            <div className={styles.submitMessageHeader}>Formulář byl úspěšně odeslán</div>
            <div className={styles.submitMessageText}>
              Ozvu se ti během následujících dní
            </div>
          </>
        )}
      </button>
    </form>
  );
}
