import React, { useState, useEffect, useRef } from 'react';
import styles from './temas.module.css';

function Temas() {
  const [mostrarTemas, setMostrarTemas] = useState(false);
  const [fondo, setFondo] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    const temaGuardado = localStorage.getItem('tema');
    const fondoGuardado = localStorage.getItem('fondo');

    if (temaGuardado) {
      document.body.classList.value = temaGuardado;
    }

    if (fondoGuardado) {
      document.body.style.backgroundImage = `url(${fondoGuardado})`;
      setFondo(fondoGuardado);
    } else {
      document.body.style.backgroundImage = 'none';
    }
  }, []);

  function handleTema(e) {
    const temaSeleccionado = e.target.value;
    document.body.classList.value = temaSeleccionado;

    // Eliminar la imagen de fondo del localStorage
    localStorage.removeItem('fondo');

    // Guardar el tema seleccionado en el localStorage
    localStorage.setItem('tema', temaSeleccionado);

    setMostrarTemas(!mostrarTemas);
  }

  function handleAdjuntarImagen(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFondo(reader.result);
      document.body.style.backgroundImage = `url(${reader.result})`;

      // Guardar el fondo en el localStorage
      localStorage.setItem('fondo', reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className={styles.change}>
      <button
        className={styles.temaButton}
        style={{ backgroundColor: 'transparent', color: 'black' }}
        onClick={() => setMostrarTemas(!mostrarTemas)}
      >
        Tema
      </button>

      {mostrarTemas && (
        <>
          <button
            className={styles.temaButton}
            value="tema0"
            style={{ backgroundColor: 'rgba(23, 242, 235, 0.516)', color: 'white' }}
            onClick={handleTema}
          >
            Azul
          </button>

          <button
            className={styles.temaButton}
            value="tema1"
            style={{ backgroundColor: 'lightgreen', color: 'white' }}
            onClick={handleTema}
          >
            Verde
          </button>

          <button
            className={styles.temaButton}
            value="tema2"
            style={{ backgroundColor: 'orange', color: 'white' }}
            onClick={handleTema}
          >
            Naran
          </button>

          <button
            className={styles.temaButton}
            value="tema3"
            style={{ backgroundColor: 'rgba(252, 0, 235, 0.356)', color: 'white' }}
            onClick={handleTema}
          >
            Rosa
          </button>

          <button
            className={styles.temaButton}
            value="tema4"
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={handleTema}
          >
            Oscuro
          </button>

          <button
            className={styles.temaButton}
            value="tema5"
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={handleTema}
          >
            Rojo
          </button>

          <button
            className={styles.temaButton}
            value="tema6"
            style={{ backgroundColor: 'yellow', color: 'black' }}
            onClick={handleTema}
          >
            Amari
          </button>

          <button
            className={styles.temaButton}
            value="tema7"
            style={{ backgroundColor: 'white', color: 'black' }}
            onClick={handleTema}
          >
            Claro
          </button>
       
          <input
            type="file"
            accept="image/*"
            onChange={handleAdjuntarImagen}
            style={{ display: 'none' }}
            ref={fileInputRef}
          />
          <button
            className={styles.temaButton}
            style={{ backgroundColor: 'transparent', color: 'black' }}
            onClick={() => fileInputRef.current.click()}
          >
            Foto
          </button>
        </>
      )}
    </div>
  );
}

export default Temas;







