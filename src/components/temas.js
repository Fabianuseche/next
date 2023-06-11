import styles from "./temas.module.css"
import React, { useEffect } from 'react'

function Temas() {
  useEffect(() => {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado) {
      document.body.classList.value = temaGuardado;
    }
  }, []);

  function handleTema(e) {
    const temaSeleccionado = e.target.value;
    document.body.classList.value = temaSeleccionado;
    localStorage.setItem('tema', temaSeleccionado);
  }

  return (
    <select className={styles.change} defaultValue="" onChange={handleTema}>
      <option value="" style={{backgroundColor: 'white', color: 'black'}}>Claro</option>
      <option value="tema0" style={{backgroundColor: 'blue', color: 'white'}}>Azul</option>
      <option value="tema1" style={{backgroundColor: 'lightgreen', color: 'white'}}>Verde</option>
      <option value="tema2" style={{backgroundColor: 'orange', color: 'white'}}>Naranja</option>
      <option value="tema3" style={{backgroundColor: 'pink', color: 'white'}}>Rosado</option>
      <option value="tema4" style={{backgroundColor: 'black', color: 'white'}}>Oscuro</option>
      <option value="tema5" style={{backgroundColor: 'red', color: 'white'}}>Rojo</option>
      <option value="tema6" style={{backgroundColor: 'yellow', color: 'black'}}>Amarillo</option>
    </select>
  )
}

export default Temas