import Image from "next/image";
import Link from "next/link";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import logo2 from "../images/logo2.png";

export default function Home() {
  return (
    <>
      <div className="main">
        <header id="cabecera">
          <div className="logo">
            <h2 className="">AVRYL</h2>
            <Image src={logo2} alt="img" />
          </div>

          <div>
            <Link href="/register">Registrese</Link>
            <Link href="/login">Iniciar Sesion</Link>
          </div>
        </header>

        <div className="titulo">
          <h1 className="border">ASISTENTE VIRTUAL</h1>
          <h1 className="wave">ASISTENTE VIRTUAL</h1>
        </div>
        <div id="contenedor1">
          <h3>Gestiona y cumple tus metas</h3>
          <Link id="btnempezar" href="/empieza">
            EMPIEZA AHORA
          </Link>
          <div className="img">
            {/*<Image src="/images/asis.png" alt="nada" width={200} height={200}/>*/}
            <Image src={img1} alt="img" />
            <Image src={img2} alt="img" />
            <Image src={img3} alt="img" />
            <Image src={img4} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}
