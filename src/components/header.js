

import Image from "next/image";
import Link from "next/link";
import logo2 from "../images/logo2.png";
import { useAuth } from "./auth";
import styles from "./header.module.css";

//se crea funcion react que se llama header, la cual de renderiza en las otras rutas
//para poder manipular la cabecera de la página de forma independiente

function Header() {
  const { user, logout } = useAuth()



  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <h2>AVRYL</h2>
        <Image src={logo2} alt="img" />
      </Link>
      <div >
        {user ? <button onClick={logout} className={styles.btnLogout}>loguot</button> : null}
      </div>
    </header>
  );
}

export default Header;
