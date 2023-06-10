import { wrapMethod } from "@/config/server";
import db from "@/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import Promise from "promise";

export const config = { rpc: true, wrapMethod };

// Se crea el objeto mailer y se configura el servicio de correo electrónico.
var mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function forgetPass(correo) {
  // Verifica si el email existe
  const token = jwt.sign({ email: correo }, process.env.SECRET);
  console.log(token);

  const redirectUrl = `${process.env.URL_APP}/reset?token=${token}`;

  let message = {
    from: "fabianusecherueda@gmail.com",
    to: correo,
    subject: "Restablecer contraseña",
    html: `<p>Link para restablecer contraseña: <br> <a href="${redirectUrl}">${redirectUrl}</a></p>`,
  };

  console.log(mailer, {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  });

  console.log(message);

  await new Promise((resolve, reject) => {
    mailer.sendMail(message, (error, info) => {
      if (error) {
        console.log("Error enviando email");
        console.log(error.message);
        reject(error);
      } else {
        console.log("Email enviado");
        resolve();
      }
    });
  });
}

export async function resetPass(newPass, token) {
  const { iat, email } = jwt.verify(token, process.env.SECRET);
  if (new Date().getSeconds() > iat + 300) {
    // Han pasado más de 300 segundos
    return { error: "El token ha expirado, vuelva a restablecer la contraseña" };
  }

  const pass = bcrypt.hashSync(newPass, 10);

  await db.table("users").where({ email }).update({ password: pass });

  return { ok: "ok" };
}

export async function register(data) {
  const pass = bcrypt.hashSync(data.password, 10);
  data.password = pass;

  await db.insert(data).into("users");

  return "ok";
}

export async function login(credentials) {
  const user = await db
    .from("users")
    .where({ email: credentials.email })
    .first();

  if (user === undefined) {
    return { error: "El usuario no está registrado" };
  }

  const valid = bcrypt.compareSync(credentials.password, user.password);
  if (!valid) {
    return { error: "Contraseña incorrecta" };
  }

  delete user.password;

  return { user };
}

export async function updateUser(email, userData) {
  try {
    const { firstname, lastname } = userData;

    await db("users").where({ email }).update({ firstname, lastname });

    return { message: "Datos de usuario actualizados correctamente" };
  } catch (error) {
    console.error("Error al actualizar los datos del usuario:", error);
    throw new Error("Error al actualizar los datos del usuario");
  }
}