import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { resetPass } from "./api/auth";
// import style from "./reset.module.css"
import styles from "@/styles/form.module.css";

const ResetPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const pass = useRef();
  const { query, push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = pass.current.value;
    if (password.length < 4) {
      alert("La contraseña debe tener al menos 4 caracteres.");
      return;
    }
    
    const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(password)) {
      alert("La contraseña debe ser alfanumérica y tener al menos 4 caracteres.");
      return;
    }
    
    const { error } = await resetPass(password, query.token);
    if (error) {
      alert(error);
    } else {
      push("/login");
    }
  };

  return (
    <div className="container" >
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
      type={showPassword ? "text" : "password"}
      ref={pass} 
      placeholder="Aqui tu nueva contrasena"/>

        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Mostrar contraseña
        </label>

      <button type="submit">Restablecer contraseña</button>
    </form>
    </div>
  );
};

export default ResetPage;
