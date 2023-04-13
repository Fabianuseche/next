
export const SECRET = process.env.SECRET

export const wrapMethod = (method, meta) => {
    return async (...args) => {
        try {
            const result = await method(...args);
            return result
        } catch (error) {
            console.error(error)
            return { error: "hubo un error inesperado" }
        }
    };
};