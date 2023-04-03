import { post } from "@/actions/client";
import Header from "@/components/header";
import styles from "@/styles/form.module.css";
import { useRouter } from 'next/router';
import { useRef } from "react";

//al estar en la carpeta "pages" se vuelve una ruta dinamica creada por el desarrolador
//donde se ingresa el contenido de la página


const Login = () => {
  const router = useRouter()

  const emailInput = useRef();
  const passInput = useRef();

  async function handlesubmit() {
    const credentials = {
      email: emailInput.current.value,
      password: passInput.current.value,
    }

    const res = await post("login", credentials)

    localStorage.setItem("token", res.token)
    router.push("/contenido")
  }

  return (
    <div className="main">
      <Header />
      <div className="container">

        <div className={styles.form} >

          <input type="text" placeholder="email" ref={emailInput} />
          <input type="password" placeholder="*******" ref={passInput} />

          <button onClick={handlesubmit}>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
