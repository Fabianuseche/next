import React from 'react'
import Link from "next/link";
import Image from "next/image";
import logo2 from "../images/logo2.png";

function register() {
  return (
    <div className="main">
    <header id="cabecera">
      <h2>AVRYL</h2>
      <div>
        <Link href="/">Regresar</Link>
      </div>
    </header>
    <div id="contenedor1">
        <input type="text" placeholder="nombres"/>
        <input type="text" placeholder="apelledos"/>
        <input type="text" placeholder="telefono"/>
        <input type="text" placeholder="correo"/>
        <input type="text" placeholder="ciudad"/>

        <Link href="/contenido"><button>Registro</button></Link>   
             
        
    </div>
  </div>
);
};

export default register