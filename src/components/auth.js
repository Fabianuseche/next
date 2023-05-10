import { useRouter } from "next/router"; // Importa el hook useRouter de next/router para manejar el enrutamiento
import { createContext, useContext, useEffect, useState } from "react"; // Importa createContext, useContext, useEffect y useState de react para manejar el contexto y el estado

const AuthContext = createContext(null); // Crea un contexto de autenticación con valor inicial null

export const AuthProvider = ({ children }) => {
  // Define el componente de proveedor de autenticación
  const router = useRouter(); // Obtiene el objeto router utilizando el hook useRouter
  const [user, setUser] = useState(null); // Define un estado local user para manejar el usuario autenticado
  const [loaded, setLoaded] = useState(false); // Define un estado local loaded para manejar el estado de carga

  useEffect(() => {
    const item = localStorage.getItem("user"); // Obtiene el usuario del localStorage
    if (item) {
      const savedUser = JSON.parse(item); // Parsea el usuario obtenido del localStorage
      setUser(savedUser); // Actualiza el estado user con el usuario obtenido del localStorage
    }
    setLoaded(true); // Marca el estado loaded como cargado
  }, []); // Ejecuta el efecto solo en el montaje del component

  useEffect(() => {
    if (!loaded) return; // Si el estado loaded no está cargado, no ejecuta el efecto


    // const currentRoute = router.route; // Obtiene la ruta actual del enrutador
    // if (!user && currentRoute === "/contenido") {
    //   router.replace("/");
    // }


    const currentRoute = router.route;                             
    if (user && ["/login", "/register"].includes(currentRoute)) {
        router.push("/contenido")                                  // Redirecciona a /contenido si el usuario está autenticado y la ruta actual es /login o /register
    } else if (!user && !["/login", "/register","/reset","/forget","/"].includes(currentRoute)) {
        router.push("/");                                            // Redirecciona a / si el usuario no está autenticado y la ruta actual no es /login, /register, o /
    }



  }, [user, router, loaded]); // Ejecuta el efecto cuando los estados user, router y loaded cambien

  const login = (newUser) => {
    setUser(newUser); // Actualiza el estado user con el nuevo usuario al hacer login
    localStorage.setItem("user", JSON.stringify(newUser)); // Guarda el usuario en el localStorage como string
  };

  const logout = () => {
    setUser(null); // Actualiza el estado user a null al hacer logout
    localStorage.removeItem("user"); // Remueve el usuario del localStorage
  };

  // Utiliza el componente AuthContext.Provider para envolver los componentes hijos y proporcionar el contexto de autenticación
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * returna el usuario una funcion para logearse y desloagarse
 * @returns {{user:any, login:Function, logout:Function}}
 */
export const useAuth = () => {
  return useContext(AuthContext);
};
