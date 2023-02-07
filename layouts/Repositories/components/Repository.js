//Hooks
import { format } from "date-fns";
//Styles
import styles from "../styles/Repository.module.sass";

export default function Repository({ name, url, description, lastUpdate }) {
  const lastUpdateDate = format(new Date(lastUpdate), "dd.MM.yyyy");
  return (
    <div className={styles.repository}>
      <a href={url} target="_blank" rel="noreferrer noopener"><h2>{name}</h2></a>
      <p className={styles.lastUpdate}>Naposledy upraveno {lastUpdateDate}</p>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer noopener"><div className={styles.logo}/></a>
    </div>
  );
}
