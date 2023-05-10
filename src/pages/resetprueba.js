import { useRouter } from "next/router";
import { useRef } from "react";
import { resetPass } from "./api/auth";

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
    <form onSubmit={handleSubmit}>
      <input ref={pass} />
      <button type="submit">Restablecer contraseña</button>
    </form>
  );
};

export default ResetPage;
