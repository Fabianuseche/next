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
        style={{ backgroundColor: 'white', color: 'black' }}
        onClick={handleTema}
      >
        Tema 1
      </button>
      {mostrarTemas && (
        <>
          <button
            className={styles.temaButton}
            value="tema0"
            style={{ backgroundColor: 'blue', color: 'white' }}
            onClick={handleTema}
          >
            Tema 2
          </button>
          <button
            className={styles.temaButton}
            value="tema1"
            style={{ backgroundColor: 'lightgreen', color: 'white' }}
            onClick={handleTema}
          >
            Tema 3
          </button>
          <button
            className={styles.temaButton}
            value="tema2"
            style={{ backgroundColor: 'orange', color: 'white' }}
            onClick={handleTema}
          >
            Tema 4
          </button>
          <button
            className={styles.temaButton}
            value="tema3"
            style={{ backgroundColor: 'pink', color: 'white' }}
            onClick={handleTema}
          >
            Tema 5
          </button>
          <button
            className={styles.temaButton}
            value="tema4"
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={handleTema}
          >
            Tema 6
          </button>
          <button
            className={styles.temaButton}
            value="tema5"
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={handleTema}
          >
            Tema 7
          </button>
          <button
            className={styles.temaButton}
            value="tema6"
            style={{ backgroundColor: 'yellow', color: 'black' }}
            onClick={handleTema}
          >
            Tema 8
          </button>
        </>
      )}
    </div>
  );
}

export default Temas;
