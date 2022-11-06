import Link from "next/Link";
import styles from "../styles/Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/favicon.ico" alt="Logo" />
      <nav className={styles.pageNavigation}>
        <Link href="/">Domů</Link>
        <Link href="/projects">Projekty</Link>
        <Link href="/gallery">Galerie</Link>
        <Link href="/about">O mně</Link>
        <div className={styles.dot}></div>
      </nav>
    </header>
  );
}
