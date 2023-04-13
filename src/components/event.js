import dayjs from "dayjs";
import styles from "./events.module.css"
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const Event = ({ name, date, lugar, hora, remove }) => {
    return (
        <div className={styles.event}>
            <div className={styles.days}>
                <span className={styles.daysnumber}>{datediff(date)}</span> 
                <span className="days-text">días</span>
            </div>

            <div className={styles.eventname}>{name} </div>
            <div className={styles.eventlugar}>{lugar}</div>

            <div className={styles.eventdate}> {dayjs(date).format("YYYY-MM-DD")} </div>
            <div className={styles.eventhora}> {dayjs(hora, "HH:mm:ss").format("hh:mm a")} </div>

            <div className={styles.actions}><button onClick={remove} className="delete">Eliminar</button></div>
        </div>
    )
}

function datediff(d) {
    var date1 = new Date(d);
    var date2 = new Date();
    var difference = date1.getTime() - date2.getTime();
    var days = Math.ceil(difference / (1000 * 3600 * 24));
    return days; // Calcula la diferencia de días entre dos fechas
}


export default Event