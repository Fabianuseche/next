import { useRouter } from "next/router";
import { useRef } from "react";
import { resetPass } from "./api/auth";
import Image from "next/image";
import PAGINA from "../images/PAGINA.jpg";

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
    <>
    <br/><br/>
     <form className="links" onSubmit={handleSubmit}>
      <input  placeholder="INGRESE CORREO" />
      <button  type="submit">
        AQUI SE REESTABLECERA LA CONTRASEÑA
      </button>
    </form>
    <Image src={PAGINA} alt="img" style={{ display: 'block', margin: 'auto' }} />

    </>
   
  );

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input ref={pass} />
  //     <button type="submit">AQUI SE REESTABLECERA LA CONTRASEÑA</button>
  //   </form>
  // );
};

export default ResetPage;
