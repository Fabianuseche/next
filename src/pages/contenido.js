import { useAuth } from "@/components/auth";
import Event from "@/components/event";
import Footer from "@/components/footer";
import Header from "@/components/header";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import formstyles from "../styles/form.module.css";
import { createEvent, deleteEvent, listEvent } from "./api/events";
import styles from "./contenido.module.css";

function Contenido() {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();

  const nombre = useRef();
  const lugar = useRef();
  const fecha = useRef();
  const hora = useRef();

  const loadEvents = async (user_id) => { // Definir una función asíncrona que acepta un argumento 'user_id'
    const {events, error} = await listEvent(user_id); // Ejecutar la función 'listEvent' con el argumento 'user_id' y esperar su resultado
    if (error) {
      console.error(error)
    } else {
      setEvents(events); // Actualizar el estado 'events' con el resultado obtenido
    }
};

useEffect(() => { // Definir un efecto que se ejecuta cuando cambia el valor del estado 'user'
  if (user) { // Verificar si el estado 'user' tiene un valor
    loadEvents(user.id); // Llamar a la función 'loadEvents' con el 'id' del usuario como argumento
  }
}, [user]); // Especifica que este efecto se ejecuta solo cuando cambia el valor del estado 'user'

const remove = async (id) => { // Definir una función asíncrona llamada 'remove' que acepta un argumento 'id'
  await deleteEvent(id); // Ejecutar la función 'deleteEvent' con el argumento 'id' y esperar a que se complete
  loadEvents(user.id); // Llamar a la función 'loadEvents' con el 'id' del usuario como argumento
};

  async function addEvent(e) {
    e.preventDefault();

    const newEvent = {
      id: (Math.random() * 100).toString(36).slice(2),
      user_id: user.id,
      name: nombre.current.value,
      date: fecha.current.value,
      lugar: lugar.current.value,
      hora: hora.current.value,
    };
    await createEvent(newEvent);

    nombre.current.value = "";
    fecha.current.value = "";
    lugar.current.value = "";
    hora.current.value = "";
    loadEvents(user.id);
  }

  return (
    <div>
      <Header />

      <div className="container">
        <div className={styles.form}>
          <form onSubmit={addEvent} className={formstyles.form}>
            <input
              type="text"
              ref={nombre}
              required
              placeholder="Nombre del Evento"
            />
            <input
              type="text"
              ref={lugar}
              required
              placeholder="Lugar del Evento"
            />
            <input
              type="date"
              ref={fecha}
              required
              placeholder="fecha del Evento"
              min={dayjs().format("YYYY-MM-DD")}
            />
            <input
              type="time"
              ref={hora}
              required
              placeholder="hora del Evento"
            />
            <button type="submit">Añadir evento</button>
          </form>
        </div>

        <div className={styles.eventos}>
          {events.map((event) => (
            <Event
              date={event.date}
              name={event.name}
              lugar={event.lugar}
              hora={event.hora}
              key={event.id}
              remove={() => remove(event.id)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contenido;
