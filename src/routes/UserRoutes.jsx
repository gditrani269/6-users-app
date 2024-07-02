import {Routes, Route, Navigate} from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { NavBar } from "../layout/NavBar"
import { RegisterPage } from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"
import { UserProvider } from "../context/UserProvider"
import { AuthContext } from "../auth/context/AuthContext"
import { useContext } from "react"

export const UserRoutes = () => {
    //para obtener el contexto del login
    const { login } = useContext(AuthContext); 
    return (

        <>
            <UserProvider> {/*toda la informacion que esta aca se va a compartir por medio del context que nos da el UserProvide
             */}
                <NavBar />
                <Routes>
                    <Route path="users" element={<UsersPage />} />
                    {!login.isAdmin || <>
                        <Route path="users/register" element={<RegisterPage />} />
                        <Route path="users/edit/:id" element={<RegisterPage  />} />
                        </>
                    }
                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </UserProvider>
        </>
    )
}