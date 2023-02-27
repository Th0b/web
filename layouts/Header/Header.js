//Hooks
import { useState, useRef, useEffect } from "react";
//Components
import Link from "next/link";
import Hamburger from "hamburger-react";
//Styles
import styles from "./styles/Header.module.sass";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        menuIsOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [menuIsOpen]);

  return (
    <header className={styles.header} ref={menuRef}>
      <Link href="/">
        <img className={styles.logo} src="/logo.png" alt="Logo" />
      </Link>
      <Link href="/">
        <div className={styles.name}>Tobiáš Návrat</div>
      </Link>
      <div className={styles.hamburgerContainer}>
        <Hamburger rounded toggled={menuIsOpen} toggle={setMenuIsOpen} />
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
