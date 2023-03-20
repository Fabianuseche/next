import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo2 from "../images/logo2.png";

const Empieza = () => {
  return (
    <div className="main">
      <header id="cabecera">
        <h2>AVRYL
        <h2 className="logo">AVRYL
        <Image src={logo2} alt="img" />
        </h2>
        </h2>
        <div>
          <Link href="/">Regresar</Link>
        </div>
      </header>
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