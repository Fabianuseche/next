import config from "@/config/server";
import db from "@/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";




export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(404).json("not found")

  const credentials = req.body

  const user = await db.from("users").where({ email: credentials.email }).first()

  if (user === undefined) {
    return res.status(401).json("usuario no existe")
  }

  const valid = bcrypt.compareSync(credentials.password, user.password)
  if (!valid) {
    return res.status(401).json("contrasena incorrecta")
  }

  const token = jwt.sign({
    email: user.email,
    id: user.id
  }, config.secret)

  res.status(200).json({ token });
}
