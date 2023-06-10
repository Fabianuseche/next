import { wrapMethod } from "@/config/server";
import db from "@/db";

export const config = { rpc: true, wrapMethod }; 

export async function createEvent(data) {
  await db.insert(data).into("events");
  return "ok";
}

export async function deleteEvent(id) {
  await db.from("events").where("id", id).del();
}
//************************************************************** */
export async function updateEvent(id, data) {
  await db.from("events").where("id", id).update(data);
}

//***************************************************************** */
export async function listEvent(user_id) {
  const events = await db
    .from("events")
    .where({ user_id: user_id })
    .orderBy("date")
    .where(
      db.raw("CURRENT_DATE < STR_TO_DATE(CONCAT(date, ' ', hora), '%Y-%m-%d %H:%i:%s')")
    )
    .select();

  return {events};
}
