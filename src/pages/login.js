import Header from "@/components/header";
import styles from "@/styles/form.module.css";
import { useRef } from "react";

const Login = () => {
  const emailInput = useRef();
  const passInput = useRef();

  async function handlesubmit() {
    const credentials = {
      email: emailInput.current.value,
      pass: passInput.current.value,
    }
    console.log(credentials)

    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = EmailRegex.test(credentials.email);
    if (isEmail) {
      alert("ok");
    } else {
      alert("error");
    }
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
