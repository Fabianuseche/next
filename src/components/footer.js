import React from 'react'
import imagenSVG from "../assets/imagenSVG.svg"
import Image from "next/image";
import styles from "./footer.module.css"

//se crea funcion react que se llama footer, la cual de renderiza en las otras rutas
//para poder manipular en pie de página de la página de forma independiente

const Footer = () => {
  return (
    <div className={styles.foot}>
      <a href="https://api.whatsapp.com/send?phone=3123607815&text=Bienvenido a Avyrl, cuéntame en que te puedo colaborar.
">
      <Image src={imagenSVG} alt="Imagen SVG" />
      </a>
      
    </div>
  )
}

export default Footer