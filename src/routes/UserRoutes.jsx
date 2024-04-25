import {Routes, Route, Navigate} from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { NavBar } from "../layout/NavBar"
import { RegisterPage } from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"
import { UserProvider } from "../context/UserProvider"

export const UserRoutes = () => {

    return (

        <>
            <UserProvider> {/*toda la informacion que esta aca se va a compartir por medio del context que nos da el UserProvide
             */}
                <NavBar />
                <Routes>
                    <Route path="users" element={<UsersPage />} />
                    <Route path="users/register" element={<RegisterPage />} />
                    <Route path="users/edit/:id" element={<RegisterPage  />} />
                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </UserProvider>
        </>
    )
}