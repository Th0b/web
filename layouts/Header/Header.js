//Hooks
import { useState } from "react";
//Components
import Link from "next/link";
import Hamburger from "hamburger-react";
//Styles
import styles from "./styles/Header.module.sass";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/">
        <img className={styles.logo} src="/favicon.ico" alt="Logo" />
      </Link>
      <Link href="/">
        <span className={styles.name}>Tobiáš Návrat</span>
      </Link>
      <div className={styles.hamburgerContainer}>
        <Hamburger toggled={menuIsOpen} toggle={setMenuIsOpen} />
      </div>
      <nav data-visible={menuIsOpen} className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">Domů</Link>
          </li>
          <li>
            <Link href="/it">IT</Link>
          </li>
          <li>
            <Link href="/photography">Fotografování</Link>
          </li>
          <li>
            <Link href="/about">O mně</Link>
          </li>
          <div className={styles.dot}></div>
        </ul>
      </nav>
    </header>
  );
}
