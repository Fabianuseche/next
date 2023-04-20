import Header from "@/components/header";
import Link from "next/link";
import styles from "./index.module.css";
import Footer from "@/components/footer";
import Image from "next/image";
import Calendar from "../images/Calendar.png";
import { useAuth } from "@/components/auth";

//al estar en la carpeta "pages" se vuelve una ruta dinámica creada por el desarrollador
//donde se ingresa el contenido de la página
export default function Home() {
  const { user } = useAuth();
  return (
    <>
      {/* en nextjs no hay clases sino className, ya que class es una palabra reservada de js*/}
      <div className="main">
        {/* se renderiza el componente Header creado en /components/header.js*/}
        <Header />

        {/* se pueden importar estilos globales y locales, si es locales toca 
        llamar el archivo con la palabra module, después se importa y se usa con la clase de la etiqueta*/}
        <div className={styles.titulo}>
          <h1 className={styles.border}>ASISTENTE VIRTUAL</h1>
          <h1 className={styles.wave}>ASISTENTE VIRTUAL</h1>
        </div>

        <div className="container">
          {!user && (
            <div>
              <Link className="links" href="/register">
                Registrese
              </Link>
              <Link className="links" href="/login">
                Iniciar Sesión
              </Link>
            </div>
          )}
          <div>
            {user && <h1>Bienvenido {user.firstname}</h1>}
            <h1>Gestiona tus eventos, citas, tareas, etc.</h1>
          </div>

          {/* en Nextjs los Links y las imagenes también se deben importar para poderlos usar*/}
          <div>
            <Link href="/contenido">
              <Image src={Calendar} alt="calendar" className={styles.slider} />
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
