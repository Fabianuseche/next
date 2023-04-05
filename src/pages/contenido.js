import Header from "@/components/header";

//al estar en la carpeta "pages" se vuelve una ruta dinámica creada por el desarrollador
//donde se ingresa el contenido de la página
function Contenido() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>CONTENIDO PRINCIPAL</h1>
        <h2>contenido secundario</h2>
      </div>
    </div>
  );
}

export default Contenido;
