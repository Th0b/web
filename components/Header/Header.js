import Link from "next/link";
import styles from "./styles/Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/"><img className={styles.logo} src="/favicon.ico" alt="Logo" /></Link>
      <Link href="/"><span className={styles.name}>Tobiáš Návrat</span></Link>
      <nav className={styles.pageNavigation}>
        <Link href="/">Domů</Link>
        <Link href="/projects">Projekty</Link>
        <Link href="/gallery">Galerie</Link>
        <Link href="/contact">Kontakt</Link>
        <div className={styles.dot}></div>
      </nav>
    </header>
  );
}
