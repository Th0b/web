import Image from "next/Image"
import styles from "../styles/Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/favicon.ico" alt="Logo" layout="fill"/>
      </div>
      <nav className={styles.pageNavigation}>
        <ul>
          <li>
            <a href="#">Domů</a>
          </li>
          <li>
            <a href="#">Projekty</a>
          </li>
          <li>
            <a href="#">Fotogalerie</a>
          </li>
          <li>
            <a href="#">O mně</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
