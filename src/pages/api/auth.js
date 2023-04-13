import { wrapMethod } from "@/config/server";
import db from "@/db";
import bcrypt from "bcrypt";

export const config = { rpc: true, wrapMethod }; // enable rpc on this API route


export async function register(data) {
  const pass = bcrypt.hashSync(data.password, 10)
  data.password = pass

  await db.insert(data).into("users");

  return "ok";
}

export async function login(credentials) {
  const user = await db
    .from("users")
    .where({ email: credentials.email })
    .first();

  if (user === undefined) {
    return { error: "el usuario no está registrado" };
  }

  const valid = bcrypt.compareSync(credentials.password, user.password);
  if (!valid) {
    return { error: "contraseña incorrecta" };
  }

  delete user.password

  return { user };
}



