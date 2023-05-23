import React, { useRef } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/styles/form.module.css";
import { useRouter } from "next/router";
import { register } from "./api/auth";

function RegisterPage() {
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
            placeholder="nombres"
            ref={firstnameInput}
            required
          />
          <input
            name="lastname"
            type="text"
            placeholder="apellidos"
            ref={lastnameInput}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="correo"
            ref={emailInput}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="contraseña"
            ref={passwordInput}
            required
          />
          <button onClick={HandleReg}>Registro</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
