import Header from "@/components/header";
import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <Header></Header>

        <div className={styles.titulo}>
          <h1 className={styles.dorder}>ASISTENTE VIRTUAL</h1>
          <h1 className={styles.wave}>ASISTENTE VIRTUAL</h1>
        </div>
        <div className="container">
          <h1>Gestiona y cumple tus metas</h1>
          <Link className="btn" href="/empieza">
            EMPIEZA AHORA
          </Link>

        </div>
      </div>
    </>
  );
}
