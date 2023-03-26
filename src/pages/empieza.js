import Header from "@/components/header";
import Link from "next/link";

const Empieza = () => {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <h2>AQUI INFORMACION SOBRE LA APLICACION<br /></h2>

        <div>
          <Link className="btn" href="/register">
            REGISTRATE
          </Link>

        </div>
        <section>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo est, non fugiat expedita odit dignissimos ab velit. Perferendis numquam voluptates commodi quod eum laboriosam rem sed. Porro nam doloremque harum!</p>
        </section>

      </div>
    </div>
  );
};

export default Empieza;
