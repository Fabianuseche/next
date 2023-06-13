import { updateEvent } from "@/pages/api/events";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRef, useState } from "react";
import styles from "./events.module.css";

dayjs.extend(customParseFormat);

const Event = ({ id, name, date, lugar, hora, remove, update }) => {
  const [updating, setUpdating] = useState(false);
  const formNombre = useRef();
  const formLugar = useRef();
  const formFecha = useRef();
  const formHora = useRef();

  async function handleUpdateEvent() {
    await updateEvent(id, {
      name: formNombre.current.value,
      lugar: formLugar.current.value,
      date: formFecha.current.value,
      hora: formHora.current.value
    });
    setUpdating(false);
    update();
  }

  function confirmDelete() {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas borrar el evento?');
    if (confirmDelete) {
      remove();
    }
  }

  const daysDiff = datediff(date);
  let daysText;
  if (daysDiff === 0) {
    daysText = "Hoy";
  } else if (daysDiff === 1) {
    daysText = "Mañana";
  } else {
    daysText = `${daysDiff} `;
  }

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
        {updating ? (
          <input
            type="text"
            defaultValue={name}
            ref={formNombre}
            required
            placeholder="Nombre del Evento"
          />
        ) : (
          name
        )}
      </div>
      <div className={styles.eventlugar}>
        {updating ? (
          <input
            type="text"
            defaultValue={lugar}
            ref={formLugar}
            required
            placeholder="Lugar del Evento"
          />
        ) : (
          lugar
        )}
      </div>
      <div className={styles.eventdate}>
        {updating ? (
          <input
            type="date"
            defaultValue={dayjs(date).format("YYYY-MM-DD")}
            ref={formFecha}
            required
            placeholder="Fecha del Evento"
            min={dayjs().format("YYYY-MM-DD")}
          />
        ) : (
          dayjs(date).format("YYYY-MM-DD")
        )}
      </div>
      <div className={styles.eventhora}>
        {updating ? (
          <input
            type="time"
            defaultValue={hora}
            ref={formHora}
            required
            placeholder="Hora del Evento"
          />
        ) : (
          dayjs(hora, "HH:mm:ss").format("hh:mm a")
        )}
      </div>
      
      <div className={styles.actions}>
        <div className={styles.buttonContainer}>
          <button onClick={confirmDelete}>Borrar</button>
          {updating ? (
            <button onClick={handleUpdateEvent} className="update">
              Guardar
            </button>
          ) : (
            <button onClick={() => setUpdating(true)}>Editar</button>
          )}
        </div>
      </div>
      {expiringSoon}
    </div>
  );
};

function datediff(d) {
  var date1 = new Date(d);
  var date2 = new Date();
  var difference = date1.getTime() - date2.getTime();
  var days = Math.ceil(difference / (1000 * 3600 * 24));
  return days;
}

export default Event;
