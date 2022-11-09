import { format } from "date-fns";
import styles from "./styles/Repository.module.sass";
import Image from 'next/image'

export default function Repository({ name, url, description, lastUpdate }) {
  const lastUpdateDate = format(new Date(lastUpdate), "dd.MM.yyyy");
  return (
    <div className={styles.repository}>
      <a href={url}><h2>{name}</h2></a>
      <p className={styles.lastUpdate}>Naposledy upraveno {lastUpdateDate}</p>
      <p>{description}</p>
      <a href={url}><img className={styles.logo} src="/github_icon.png" alt="Github Logo"></img></a>
    </div>
  );
}
