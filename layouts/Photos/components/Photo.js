//Styles
import styles from "../styles/Photo.module.sass";

export default function Photo({ url, id, caption }) {
  return (
    <div className={styles.photo} key={id}>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img src={url} alt={caption} />
        <div className={styles.photoCaption}>{caption}</div>
      </a>
    </div>
  );
}
