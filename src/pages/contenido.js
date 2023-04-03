import Header from "@/components/header";

//al estar en la carpeta "pages" se vuelve una ruta dinamica creada por el desarrolador
//donde se ingresa el contenido de la página
function Contenido() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>CONTENIDO PRINCIPAL</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error deserunt nihil, officia adipisci tenetur laudantium molestiae assumenda velit expedita et nobis at mollitia consequatur illum voluptates, quia eaque, neque impedit.</h2>
      </div>
    </div>
  );
}

export default Contenido;
