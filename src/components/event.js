import { updateEvent } from "@/pages/api/events";
import dayjs from "dayjs"; // Importar la biblioteca dayjs para manipulación de fechas
import customParseFormat from "dayjs/plugin/customParseFormat"; // Importar el plugin customParseFormat de dayjs
import { useRef, useState } from "react";
import styles from "./events.module.css"; // Importar los estilos CSS para el componente

dayjs.extend(customParseFormat); // Extender dayjs con el plugin customParseFormat

const Event = ({ id, name, date, lugar, hora, remove, update }) => {
  const [updating, setUpdating] = useState(false)
  const formNombre = useRef();
  const formLugar = useRef();
  const formFecha = useRef();
  const formHora = useRef();

  async function handleUpdateEvent(){
    await updateEvent(id, {
      name: formNombre.current.value,
      lugar: formLugar.current.value,
      date: formFecha.current.value,
      hora: formHora.current.value
    })
    setUpdating(false)
    update()
  }

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
      <div className={styles.eventname}>
        {updating ? <input
          type="text"
          defaultValue={name}
          ref={formNombre}
          required
          placeholder="Nombre del Evento"
        /> : name}
      </div>
      <div className={styles.eventlugar}>
        {updating ? <input
          type="text"
          defaultValue={lugar}
          ref={formLugar}
          required
          placeholder="Lugar del Evento"
        /> : lugar}
      </div>
      <div className={styles.eventdate}>
        {updating ? <input
          type="date"
          defaultValue={dayjs(date).format("YYYY-MM-DD")}
          ref={formFecha}
          required
          placeholder="Fecha del Evento"
          min={dayjs().format("YYYY-MM-DD")}
        /> : dayjs(date).format("YYYY-MM-DD")}
      </div>
      <div className={styles.eventhora}>
        {updating ? <input
          type="time"
          defaultValue={hora}
          ref={formHora}
          required
          placeholder="Hora del Evento"
        /> : dayjs(hora, "HH:mm:ss").format("hh:mm a")}

      </div>
      {expiringSoon} {/* Mostrar mensaje adicional */}
      <div className={styles.actions}>
        <button onClick={remove} className="delete">
          Borrar
        </button>
        {
          updating ?
            <button onClick={handleUpdateEvent} className="update">
              Editar
            </button> 
            : <button onClick={() => setUpdating(true)} className="update">
              Editar
            </button>
        }
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
