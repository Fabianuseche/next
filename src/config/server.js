
/**
 * 
 * @param {*Esta función llamada wrapMethod envuelve otra función method con un manejo de errores. 
 * Toma una función method como argumento y devuelve una nueva función asíncrona que puede ser 
 * invocada con cualquier cantidad de argumentos. 
 * Dentro de la función asíncrona, se ejecuta la función method con los argumentos recibidos utilizando await 
 * para esperar su resultado. 
 * Si la ejecución de method es exitosa, se retorna el resultado. Si ocurre un error durante la ejecución de method,
 * se captura el error, se imprime en la consola con console.error, y se retorna un objeto con un mensaje de error
 * genérico en caso de que algo salga mal.} method 
 * @returns 
 */
export const wrapMethod = (method) => {
    return async (...args) => { // Definir una función asíncrona que toma cualquier cantidad de argumentos
        try {
            const result = await method(...args); // Ejecutar la función "method" con los argumentos recibidos y esperar su resultado
            return result; // Retornar el resultado de la ejecución de "method"
        } catch (error) { // Capturar cualquier error que ocurra durante la ejecución de "method"
            console.error(error); // Imprimir el error en la consola
            return { error: "hubo un error inesperado" }; // Retornar un objeto con un mensaje de error genérico
        }
    };
};