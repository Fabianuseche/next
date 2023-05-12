import { useRouter } from "next/router";
import { useRef } from "react";
import { resetPass } from "./api/auth";
// import style from "./reset.module.css"
import styles from "@/styles/form.module.css";

const ResetPage = () => {
  const pass = useRef();
  const { query, push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await resetPass(pass.current.value, query.token);
    if (error) {
      alert(error);
    } else {
      push("/login");
    }
  };

  return (
    <div className="container" >
    <form onSubmit={handleSubmit} className={styles.form}>
      <input ref={pass} placeholder="Aqui tu nueva contrasena"/>
      <button type="submit">Restablecer contraseña</button>
    </form>
    </div>
  );
};

export default ResetPage;
