import Image from "next/image";
import imagenSVG from "../assets/imagenSVG.svg";
import { useAuth } from "./auth";
import styles from "./footer.module.css";

//se crea funcion react que se llama footer, la cual de renderiza en las otras rutas
//para poder manipular en pie de página de la página de forma independiente

const Footer = () => {
  const { user, logout } = useAuth();
  return (
    <div className={styles.foot}>
     <a
  href="https://api.whatsapp.com/send?phone=3123607815&text=Escribe tu mensaje"
  target="_blank" 
  rel="noopener noreferrer" 
>
  <Image src={imagenSVG} alt="Imagen SVG" />
</a>
      {user ? (
        <button onClick={logout} className={styles.btnLogout}>
          {" "}
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Footer;
