import React, { useState, useEffect } from 'react';
import styles from "./temas.module.css";

function Temas() {
  const [mostrarTemas, setMostrarTemas] = useState(false);

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
    setMostrarTemas(!mostrarTemas);
  }

  return (
    <div className={styles.change}>
      <button
        className={styles.temaButton}
        value=""
        style={{ backgroundColor: 'transparent', color: 'black' }}
        onClick={handleTema}
      >
        Color
      </button>
      {mostrarTemas && (
        <>
          <button
            className={styles.temaButton}
            value="tema0"
            style={{ backgroundColor: 'rgba(23, 242, 235, 0.516', color: 'white' }}
            onClick={handleTema}
          />
            
          <button
            className={styles.temaButton}
            value="tema1"
            style={{ backgroundColor: 'lightgreen', color: 'white' }}
            onClick={handleTema}
          />
           
          <button
            className={styles.temaButton}
            value="tema2"
            style={{ backgroundColor: 'orange', color: 'white' }}
            onClick={handleTema}
          />
            
          <button
            className={styles.temaButton}
            value="tema3"
            style={{ backgroundColor: 'rgba(252, 0, 235, 0.356)', color: 'white' }}
            onClick={handleTema}
          />
            
          <button
            className={styles.temaButton}
            value="tema4"
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={handleTema}
          />
            
          <button
            className={styles.temaButton}
            value="tema5"
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={handleTema}
          />
            
          <button
            className={styles.temaButton}
            value="tema6"
            style={{ backgroundColor: 'yellow', color: 'black' }}
            onClick={handleTema}
          />
            
        </>
      )}
    </div>
  );
}

export default Temas;
