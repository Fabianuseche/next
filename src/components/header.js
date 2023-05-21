import Image from "next/image";
import Link from "next/link";
import logo2 from "../images/logo2.png";
import { useAuth } from "./auth";
import styles from "./header.module.css";

function downloadPDF() {
  const pdfURL = "/manual/manual.pdf";
  const link = document.createElement("a");
  link.href = pdfURL;
  link.download = "manual.pdf";
  link.click();
}

//se crea funcion react que se llama header, la cual de renderiza en las otras rutas
//para poder manipular la cabecera de la página de forma independiente

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <h2>My AVRYL</h2>
        <Image src={logo2} alt="img" />
      </Link>
      <div>
      {!user ? (
          <>
        <button className={styles.btnmanual} onClick={downloadPDF}>
          Manual Uso PDF
        </button>
      
        <a className={styles.btnmanual} href="https://www.youtube.com/" target="_blank">
         Video Manual Uso
          
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
