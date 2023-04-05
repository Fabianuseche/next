import Header from "@/components/header";
import Link from "next/link";

//al estar en la carpeta "pages" se vuelve una ruta dinámica creada por el desarrollador
//donde se ingresa el contenido de la página
const Empieza = () => {
  return (
    <div className="main">
      <Header />
      <div className="container">
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
    </div>
  );
};

export default Empieza;
