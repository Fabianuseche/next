// Importación de módulos y componentes necesarios
import Header from "@/components/header"; // Importación del componente Header desde la ruta "@/components/header"
import { login } from "@/pages/api/auth"; // Importación de la función de autenticación de la ruta "@/pages/api/auth"
import styles from "@/styles/form.module.css"; // Importación de estilos CSS desde la ruta "@/styles/form.module.css"
import { useRouter } from 'next/router'; // Importación del hook useRouter de la librería Next.js para manejar la navegación
import { useRef } from "react"; // Importación del hook useRef de la librería React para referenciar elementos del DOM

// Definición del componente LoginPage
const LoginPage = () => {
  const router = useRouter(); // Inicialización del hook useRouter para manejar la navegación

  const emailInput = useRef(); // Creación de una referencia al input de email usando el hook useRef
  const passInput = useRef(); // Creación de una referencia al input de contraseña usando el hook useRef

  // Función asincrónica que maneja el envío del formulario
  async function handlesubmit() {
    const credentials = {
      email: emailInput.current.value, // Obtención del valor del input de email a través de la referencia emailInput
      password: passInput.current.value, // Obtención del valor del input de contraseña a través de la referencia passInput
    }

    const response = await login(credentials); // Llamada a la función de autenticación con las credenciales ingresadas
    if (response.error) { // Verificación si la respuesta contiene un error
      alert(response.error); // Mostrar una alerta con el mensaje de error
      return;
    }

    localStorage.setItem("token", response.token); // Almacenamiento del token de autenticación en el almacenamiento local del navegador

    router.push("/contenido"); // Redirección a la página de contenido usando el hook useRouter y la función push
  }

  // Retorno del componente LoginPage
  return (
    <div className="main">
      <Header /> {/* Renderización del componente Header */}
      <div className="container">
        <div className={styles.form} >
          <input type="email" placeholder="email" ref={emailInput} /> {/* Renderización del input de email con la referencia emailInput */}
          <input type="password" placeholder="*******" ref={passInput} /> {/* Renderización del input de contraseña con la referencia passInput */}

          <button onClick={handlesubmit}>Iniciar Sesión</button> {/* Renderización del botón de inicio de sesión con el evento onClick que llama a la función handlesubmit */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage; // Exportación del componente LoginPage como componente predeterminado para su uso en otros archivos del proyecto
