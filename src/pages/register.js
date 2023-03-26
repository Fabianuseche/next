import Header from '@/components/header';
import styles from "@/styles/form.module.css";

function register() {
  return (
    <div className="main">
      <Header />
      <div className='container'>
        <form className={styles.form}>
          <input type="text" placeholder="nombres" />
          <input type="text" placeholder="apelledos" />
          <input type="text" placeholder="telefono" />
          <input type="text" placeholder="correo" />
          <input type="text" placeholder="ciudad" />

          <button>Registro</button>
        </form>

      </div>
    </div>
  );
};

export default register