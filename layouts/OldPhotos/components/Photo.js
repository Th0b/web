//Styles
import styles from "../styles/Photo.module.sass";

export default function Photo({ url, caption }) {
  return (
    <div className={styles.photo}>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img src={url} alt={caption} />
        <div className={styles.photoCaption}>{caption}</div>
      </a>
    </div>
  );
}
