//Components
import Link from "next/link";
//Styles
import styles from "./styles/Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img className={styles.logo} src="/favicon.ico" alt="Logo" />
      </Link>
      <Link href="/">
        <span className={styles.name}>Tobiáš Návrat</span>
      </Link>
      <nav className={styles.pageNavigation}>
        <Link href="/">Domů</Link>
        <Link href="/it">IT</Link>
        <Link href="/photography">Fotografování</Link>
        <Link href="/about">O mně</Link>
        <div className={styles.dot}></div>
      </nav>
    </header>
  );
}
