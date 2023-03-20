import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo2 from "../images/logo2.png";

const Login = () => {
  return (
    <div className="main">
      <header id="cabecera">
        <h2 className="logo">AVRYL
        <Image src={logo2} alt="img" />
        </h2>
        <div>
          <Link href="/">Regresar</Link>
        </div>
      </header>
      <div id="contenedor1">
        <input type="text" placeholder="usuario" />
        <input type="password" placeholder="*******" />
        <br />
        <Link href="/contenido"><button>Registro</button></Link> 
      </div>
    </div>
  );
};

export default Login;
