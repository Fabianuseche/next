import { post } from "@/actions/client";
import Header from "@/components/header";
import styles from "@/styles/form.module.css";
import { useRef } from "react";
import { useRouter } from 'next/router'

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
