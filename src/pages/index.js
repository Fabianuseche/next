import Header from "@/components/header";
import Link from "next/link";
import styles from "./index.module.css";


//al estar en la carpeta "pages" se vuelve una ruta dinámica creada por el desarrollador
//donde se ingresa el contenido de la página
export default function Home() {
  return (
    <>
      {/* en nextjs no hay clases sino className, ya que class es una palabra reservada de js*/}
      <div className="main">
        {/* se renderiza el componente Header creado en /components/header.js*/}
        <Header></Header>

        {/* se pueden importar estilos globales y locales, si es locales toca 
        llamar el archivo con la palabra module, después se importa y se usa con la clase de la etiqueta*/}
        <div className={styles.titulo}>

          <h1 className={styles.border}>ASISTENTE VIRTUAL</h1>
          <h1 className={styles.wave}>ASISTENTE VIRTUAL</h1>
        </div>

        <div className="container">
          <div>
            <Link className="links" href="/register">Registrese</Link>
            <Link className="links" href="/login">Iniciar Sesión</Link>
          </div>
          <h1>Gestiona y cumple tus metas</h1>
          {/* en Nextjs los Links también se deben importar para poderlos usar*/}
          <Link className="btn" href="/empieza">
            EMPIEZA AHORA
          </Link>
        </div>

      </div>
    </>
  );
}
