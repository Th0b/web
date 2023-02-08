//Styles
import styles from "./FetchProcess.module.sass";

export default function FetchProcess({ error, loading }) {
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <img src="errorCross.svg" alt="Error" className={styles.errorCross} />
        <div className={styles.error}>Při načítání dat nastala chyba, zkus obnovit stránku.</div>
      </div>
    );
  } else if (loading) {
    return (
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
