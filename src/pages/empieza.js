import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import eventos from "../images/Eventos.png";
import Calendar from "../images/Calendar.png";
import facturas from "../images/facturas.png";
import styles from "./empieza.module.css"

//al estar en la carpeta "pages" se vuelve una ruta dinámica creada por el desarrollador
//donde se ingresa el contenido de la página
const Empieza = () => {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <section className="slider">
        <Image src={eventos} alt="eventos" className={styles.slider}/>
        <Image src={Calendar} alt="calendar" className={styles.slider}/>
        <Image src={facturas} alt="facturas" className={styles.slider}/>
        <button onclick="prevSlide()">Anterior</button>
        <button onclick="nextSlide()">Siguiente</button>
        </section>
        
        <h2>AQUÍ INFORMACIÓN SOBRE LA APLICACIÓN<br /></h2>

        <div>
          <Link className="btn" href="/register">
            REGÍSTRATE
          </Link>

        </div>
        <section>
          <p>párrafo</p>
        </section>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Empieza;
