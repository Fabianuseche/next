import { useRouter } from "next/router"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const item = localStorage.getItem("user")
        if (item) {
            const savedUser = JSON.parse(item)
            setUser(savedUser)
        }
        setLoaded(true)
    }, [])

    useEffect(() => {
        if (!loaded) return

        const currentRoute = router.route
        if (user && ["/login", "/register"].includes(currentRoute)) {
            router.push("/contenido")
        } else if (!user && !["/login", "/register","/"].includes(currentRoute)) {
            router.push("/")
        }
    }, [user, router, loaded])


    const login = (newUser) => {
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
}

/**
 * returna el usuario una funcion para logearse y desloagarse
 * @returns {{user:any, login:Function, logout:Function}}
 */
export const useAuth = () => {
    return useContext(AuthContext)
}
