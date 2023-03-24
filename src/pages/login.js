import Header from "@/components/header";
import { useRef } from "react";

const Login = () => {
  //referencia al elemento input
  const emailInput = useRef();

  function validar() {
    const email = emailInput.current.value;
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = EmailRegex.test(email);
    if (isEmail) {
      alert("ok");
    } else alert("error");
  }

  return (
    <div className="main">
      <Header />
      <form id="contenedor1">
        <input type="text" placeholder="email" ref={emailInput} />

        <input type="password" placeholder="*******" />
        <button onClick={validar}>Registro</button>
      </form>
    </div>
  );
};

export default Login;
