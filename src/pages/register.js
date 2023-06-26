import React, { useRef, useState  } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/styles/form.module.css";
import { useRouter } from "next/router";
import { register } from "./api/auth";

function RegisterPage() {

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  async function HandleReg() {
    const firstname = firstnameInput.current.value;
    const lastname = lastnameInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    if (!firstname || !lastname || !email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Validar contraseña alfanumérica y de al menos 4 caracteres
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    if (!passwordRegex.test(password)) {
      alert("La contraseña debe ser alfanumérica y tener al menos 4 caracteres.");
      return;
    }

    const datos = {
      firstname,
      lastname,
      email,
      password,
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
            placeholder="Nombres"
            ref={firstnameInput}
            required
          />
          <input
            name="lastname"
            type="text"
            placeholder="Apellidos"
            ref={lastnameInput}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Correo"
            ref={emailInput}
            required
          />
<input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          ref={passwordInput}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Mostrar contraseña
        </label>
        <button onClick={HandleReg}>Registro</button>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
