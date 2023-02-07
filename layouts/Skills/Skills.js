//Styles
import styles from "./Skills.module.sass";

export default function Skills() {
  return (
    <div className={styles.columnsWrapper}>
      <div className={styles.column}>
        <h3>Znalosti jazyků</h3>
        <ul>
          <li>HTML</li>
          <li>CSS (Sass)</li>
          <li>JavaScript (React, NextJs)</li>
          <li>C</li>
          <li>Python</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Další znalosti</h3>
        <ul>
          <li>Git</li>
          <li>Cisco IOS</li>
          <li>Wordpress</li>
        </ul>
      </div>
    </div>
  );
}
