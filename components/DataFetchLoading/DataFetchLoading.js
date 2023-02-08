//Styles
import styles from "./DataFetchLoading.module.sass";

export default function DataFetchLoading({ error, loading }) {
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <img src="error.svg" alt="Error" className={styles.errorCross} />
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
