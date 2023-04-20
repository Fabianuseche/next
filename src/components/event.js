import dayjs from "dayjs"; // Importar la biblioteca dayjs para manipulación de fechas
import customParseFormat from "dayjs/plugin/customParseFormat"; // Importar el plugin customParseFormat de dayjs
import styles from "./events.module.css"; // Importar los estilos CSS para el componente

dayjs.extend(customParseFormat); // Extender dayjs con el plugin customParseFormat

const Event = ({ name, date, lugar, hora, remove }) => {
  const daysDiff = datediff(date); // Calcular la diferencia de días utilizando la función 'datediff'

  // Mostrar mensaje personalizado si la diferencia de días es menor a 2
  let daysText;
  if (daysDiff === 0) {
    daysText = "Hoy";
  } else if (daysDiff === 1) {
    daysText = "Mañana";
  } else {
    daysText = `${daysDiff} `;
  }

  // Mostrar mensaje adicional si la diferencia de días es menor o igual a 2
  let expiringSoon;

  if (daysDiff < 1) {
    expiringSoon = <div className={styles.expiring}>¡VENCE HOY!</div>;
  } else if (daysDiff < 2) 
  expiringSoon = <div className={styles.expiring}>¡PROXIMO A VENCER!</div>;
  
  else {
    expiringSoon = null;
  }

  return (
    <div className={styles.event}>
      <div className={styles.days}>
      <span className={styles.daysnumber}>{daysText}</span>
        {daysText !== "Hoy" && daysText !== "Mañana" && (
          <>
            <span>Días</span>
          </>
        )}
      </div>
      <div className={styles.eventname}>{name} </div>
      <div className={styles.eventlugar}>{lugar}</div>
      <div className={styles.eventdate}>
        {" "}
        {dayjs(date).format("YYYY-MM-DD")}{" "}
      </div>
      <div className={styles.eventhora}>
        {" "}
        {dayjs(hora, "HH:mm:ss").format("hh:mm a")}{" "}
      </div>
      {expiringSoon} {/* Mostrar mensaje adicional */}
      <div className={styles.actions}>
        <button onClick={remove} className="delete">
          Eliminar
        </button>
      </div>
    </div>
  );
};

function datediff(d) {
  var date1 = new Date(d); // Crear un objeto de fecha a partir de la cadena de fecha d
  var date2 = new Date(); // Crear un objeto de fecha para la fecha actual
  var difference = date1.getTime() - date2.getTime(); // Calcular la diferencia en milisegundos entre las dos fechas
  var days = Math.ceil(difference / (1000 * 3600 * 24)); // Calcular la diferencia en días redondeando hacia arriba
  return days; // Retornar la diferencia en días
}

export default Event; // Exportar el componente Event como componente por defecto
