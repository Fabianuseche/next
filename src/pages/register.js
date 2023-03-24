import React from 'react'
import Link from "next/link";
import Header from '@/components/header';

function register() {
  return (
    <div className="main">
      <Header/>
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