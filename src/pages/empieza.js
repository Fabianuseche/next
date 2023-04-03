import Header from "@/components/header";
import Link from "next/link";

//al estar en la carpeta "pages" se vuelve una ruta dinamica creada por el desarrolador
//donde se ingresa el contenido de la página
const Empieza = () => {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <h2>AQUI INFORMACION SOBRE LA APLICACION</h2>

        <Link className="btn" href="/register">Registrese</Link>

      </div>
    </div>
  );
};

export default Empieza;
