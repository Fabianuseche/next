import Image from "next/image";
import Link from "next/link";
import logo2 from "../images/logo2.png";
import { useAuth } from "./auth";
import styles from "./header.module.css";

import { FaVideo } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';

function downloadPDF() {
  const pdfURL = "/manual/Manual_Avryl.pdf";
  const link = document.createElement("a");
  link.href = pdfURL;
  link.download = "Manual_Avryl.pdf";
  link.click();
}

//se crea funcion react que se llama header, la cual de renderiza en las otras rutas
//para poder manipular la cabecera de la página de forma independiente

function Header() {
  const { user, logout } = useAuth();

  

  return (
    <header className={styles.header}>
      

      <Link href="/" className={styles.logo}>
        <h2>AVRYL</h2>
        <Image src={logo2} alt="img" />
      </Link>
      <div className={styles.manual}>
      {!user ? (
          <>
        <button className={styles.btnmanual} onClick={downloadPDF}>
          <FaFilePdf className={styles.icon}/>
        Manual Uso 
        </button>
      -
      <a className={styles.btnmanual} href="https://www.youtube.com/" target="_blank">
        <FaVideo  className={styles.icon} />
       Manual Uso 
      </a>
        </>
        ) : null}
      </div>

      <div>
        {user ? (
          <>
            <div>
              {user.firstname} {user.lastname}
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
