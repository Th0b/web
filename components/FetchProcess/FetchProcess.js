//Components
import Loading from "components/Loading/Loading"
//Styles
import styles from "./FetchProcess.module.sass";

export default function FetchProcess({ status }) {
  if (status === "error") {
    return (
      <div className={styles.errorContainer}>
        <img src="errorCross.svg" alt="Error" className={styles.errorCross} />
        <div className={styles.error}>Při načítání dat nastala chyba, zkus obnovit stránku.</div>
      </div>
    );
  } else if (status === "loading") {
    return (
      <Loading/>
    );
  }
}
