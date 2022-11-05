import Image from "next/Image";
import styles from "../styles/Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/favicon.ico" alt="Logo" layout="fill" />
      </div>
      <nav className={styles.pageNavigation}>
        <a href="#">Domů</a>
        <a href="#">Projekty</a>
        <a href="#">Fotogalerie</a>
        <a href="#">O mně</a>
        <div className={styles.dot}></div>
      </nav>
    </header>
  );
}
