import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import logo2 from "../images/logo2.png";

function Contenido() {
  return (
    <div>
          <header id="cabecera">
          <h2>AVRYL
          <h2 className="logo">AVRYL
        <Image src={logo2} alt="img" />
        </h2>
          </h2>
          <div>
        <Link href="/">Salir</Link>
      </div>
          
        </header>
        <div id="contenedor1">
          <h1>CONTENIDO PRINCIPAL</h1>
          
        
        </div>
    </div>
  )
}

export default Contenido