//Styles
import styles from "./Skills.module.sass";

export default function Skills() {
  return (
    <div className={styles.columnsWrapper}>
      <div className={styles.column}>
        <h3>Jazyky</h3>
        <ul>
          <li>
            <progress className={styles.progressBar} max="100" value="90" />
            HTML
          </li>
          <li>
            <progress className={styles.progressBar} max="100" value="80" />
            CSS (Sass)
          </li>
          <li>
            <progress className={styles.progressBar} max="100" value="60" />
            JavaScript (React, NextJs)
          </li>
          <li>
            <progress className={styles.progressBar} max="100" value="60" />C
          </li>
          <li>
            <progress className={styles.progressBar} max="100" value="30" />
            Python
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Další</h3>
        <ul>
          <li>
            <progress className={styles.progressBar} max="100" value="75" />
            Git
          </li>
          <li>
            <progress className={styles.progressBar} max="100" value="50" />
            Cisco IOS
          </li>
          <li>
            <progress className={styles.progressBar} max="100" value="70" />
            Wordpress
          </li>
        </ul>
      </div>
    </div>
  );
}
