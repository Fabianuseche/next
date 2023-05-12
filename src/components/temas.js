

import styles from "./temas.module.css"
import React from 'react'

function Temas() {

function handleTema(e){
    document.body.classList.value =e.target.value  
}

  return (
    <select className={styles.change} defaultValue="" onChange={handleTema}>

   <option value="" style={{backgroundColor: 'white', color: 'black'}}>Color</option>
   <option value="tema0" style={{backgroundColor: 'blue', color: 'white'}}>Azul</option>
   <option value="tema1" style={{backgroundColor: 'lightgreen', color: 'white'}}>Verde</option>
   <option value="tema2" style={{backgroundColor: 'orange', color: 'white'}}>Naranja</option>
   <option value="tema3" style={{backgroundColor: 'pink', color: 'white'}}>Rosado</option>
   <option value="tema4" style={{backgroundColor: 'black', color: 'white'}}>Oscuro</option>
    </select>
  )
}

export default Temas