import Header from "@/components/header";
import Link from "next/link";

const Empieza = () => {
  return (
    <div className="main">
      <Header />
      <div id="contenedor1">
        <h2>AQUI INFORMACION SOBRE LA APLICACION</h2>
        <button>
          <Link href="/register">Registrese</Link>
        </button>
      </div>
    </div>
  );
};

export default Empieza;
