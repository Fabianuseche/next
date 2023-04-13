import { useAuth } from "@/components/auth";
import Event from "@/components/event";
import Footer from "@/components/footer";
import Header from "@/components/header";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { createEvent, deleteEvent, listEvent } from "./api/events";
import styles from "./contenido.module.css"

function Contenido() {
  const [events, setEvents] = useState([]);
  const { user } = useAuth()

  const nombre = useRef();
  const lugar = useRef();
  const fecha = useRef();
  const hora = useRef();
  

  const loadEvents = async (user_id) => {
    const savedEvents = await listEvent(user_id)
    setEvents(savedEvents)
  }

  useEffect(() => {
    if (user) {
      loadEvents(user.id)
    }
  }, [user])

  const remove = async (id) => {
    await deleteEvent(id)
    loadEvents(user.id)
  }

  async function addEvent(e) {
    e.preventDefault();

    const newEvent = {
      id: (Math.random() * 100).toString(36).slice(2),
      user_id: user.id,
      name: nombre.current.value,
      date: fecha.current.value,
      lugar: lugar.current.value,
      hora: hora.current.value
    };
    await createEvent(newEvent)

    nombre.current.value = "";
    fecha.current.value = "";
    lugar.current.value = "";
    hora.current.value  = "";
    loadEvents(user.id)
  }

  return (
    <div>
      <Header />

      <div className="container">
        <h1>CONTENIDO PRINCIPAL</h1>
        <div className={styles.form}>
          <form onSubmit={addEvent}>
            <input type="text" ref={nombre} required placeholder="Nombre del Evento"/>
            <input type="text" ref={lugar} required placeholder="Lugar del Evento"/>
            <input type="date" ref={fecha} required min={dayjs().format('YYYY-MM-DD')}/>
            <input type="time" ref={hora} required />
            <button className="btn" type="submit" >Añadir evento</button>
          </form> 
        </div>

        <div>
          {events.map((event) =>
            <Event date={event.date} name={event.name} lugar={event.lugar} hora={event.hora} key={event.id} remove={() => remove(event.id)} />
          )}
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Contenido;
