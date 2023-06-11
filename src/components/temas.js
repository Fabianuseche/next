import styles from "./temas.module.css";
import React, { useEffect, useRef } from 'react';

function Temas() {
  const selectRef = useRef(null);

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

  function openOptions() {
    selectRef.current.click();
  }

  return (
    <div className={styles.container}>
      <div className={styles.selectBox} onClick={openOptions}>
        <span className={styles.selectedOption}>Tema</span>
        <select
          ref={selectRef}
          className={styles.change}
          defaultValue=""
          onChange={handleTema}
        >
          <option value="tema0" style={{backgroundColor: 'blue', color: 'white'}}>Blue</option>
          <option value="tema1" style={{backgroundColor: 'lightgreen', color: 'white'}}>Light Green</option>
          <option value="tema2" style={{backgroundColor: 'orange', color: 'white'}}>Orange</option>
          <option value="tema3" style={{backgroundColor: 'pink', color: 'white'}}>Pink</option>
          <option value="tema4" style={{backgroundColor: 'black', color: 'white'}}>Black</option>
          <option value="tema5" style={{backgroundColor: 'red', color: 'white'}}>Red</option>
          <option value="tema6" style={{backgroundColor: 'yellow', color: 'black'}}>Yellow</option>
        </select>
      </div>
    </div>
  );
}

export default Temas;
