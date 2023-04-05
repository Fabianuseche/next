import Header from "@/components/header";
import styles from "@/styles/form.module.css";
import { useRouter } from "next/router";
import { useRef } from "react";
import { register } from "./api/auth";

function RegisterPage() {
  const router = useRouter();

  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  async function HandleReg() {
    const datos = {
      firstname: firstnameInput.current.value,
      lastname: lastnameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
    const datosReg = await register(datos);
    if (datosReg.error) {
      alert(datosReg.error);
      return;
    }

    router.push("/login");
  }

      return (
        <div className="main">
          <Header />
          <div className="container">
            <div className={styles.form}>
              <input
                name="firstname"
                type="text"
            placeholder="nombres"
            ref={firstnameInput}
          />
          <input
            name="lastname"
            type="text"
            placeholder="apellidos"
            ref={lastnameInput}
          />
          <input
            name="email"
            type="email"
            placeholder="correo"
            ref={emailInput}
          />
          <input
            name="password"
            type="password"
            placeholder="contraseña"
            ref={passwordInput}
          />
          <button onClick={HandleReg}>Registro</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
