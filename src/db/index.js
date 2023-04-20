import knex from 'knex'; // Importar la biblioteca 'knex' para la conexión a la base de datos

const db = knex({ // Crear una instancia de la clase 'knex' con la configuración de conexión a la base de datos
    client: 'mysql2', // Especificar el cliente de base de datos a utilizar (en este caso, MySQL)
    connection: { // Especificar los detalles de conexión a la base de datos
        host:process.env.DB_HOST, // Utilizar el valor de la variable de entorno 'DB_HOST' como el host de la base de datos
        port: process.env.DB_PORT, // Utilizar el valor de la variable de entorno 'DB_PORT' como el puerto de la base de datos
        user: process.env.DB_USER, // Utilizar el valor de la variable de entorno 'DB_USER' como el usuario de la base de datos
        password: process.env.DB_PASSWORD, // Utilizar el valor de la variable de entorno 'DB_PASSWORD' como la contraseña de la base de datos
        database: process.env.DB_DATABASE // Utilizar el valor de la variable de entorno 'DB_DATABASE' como el nombre de la base de datos
    }
});

export default db; // Exportar la instancia de la clase 'knex' configurada para la conexión a la base de datos
