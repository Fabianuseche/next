import Image from "next/image";
import Link from "next/link";
import logo2 from "../images/logo2.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <h2>AVRYL</h2>
        <Image src={logo2} alt="img" />
      </Link>
      <div>
        <Link href="/register">Registrese</Link>
        <Link href="/login">Iniciar Sesion</Link>
      </div>
    </header>
  );
}

export default Header;
