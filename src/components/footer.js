import React from "react";
import imagenSVG from "../assets/imagenSVG.svg";
import Image from "next/image";
import styles from "./footer.module.css";
import { useAuth } from "./auth";

//se crea funcion react que se llama footer, la cual de renderiza en las otras rutas
//para poder manipular en pie de página de la página de forma independiente

const Footer = () => {
  const { user, logout } = useAuth();
  return (
    <div className={styles.foot}>
      <a
        href="https://api.whatsapp.com/send?phone=3123607815&text=Bienvenido a Avyrl, cuéntame en que te puedo colaborar.
"
      >
        <Image src={imagenSVG} alt="Imagen SVG" />
      </a>
      {user ? (
        <button onClick={logout} className={styles.btnLogout}>
          {" "}
          logout
        </button>
      ) : null}
    </div>
  );
};

export default Footer;
