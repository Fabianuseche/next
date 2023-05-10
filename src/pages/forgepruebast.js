import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/styles/form.module.css";
import { useRef } from "react";
import { forgetPass } from "./api/auth";

function Forget() {
  const email = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    forgetPass(email.current.value);
    alert("corre enviado");
  };

  return (
    <div className="main">
      <Header />
      <div className="container">
        <h1>
          ¿Olvidaste tu contraseña? <br />
          Introduce tu correo electrónico para recuperar tu contraseña
        </h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p>Introduce tu correo electrónico para recuperar tu contraseña.</p>
          <input type="email" placeholder="email" ref={email} />

          <button type="submit">Enviar Información</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Forget;
