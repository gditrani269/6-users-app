import {Routes, Route, Navigate} from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { NavBar } from "../layout/NavBar"
import { RegisterPage } from "../pages/RegisterPage"
import { useSelector } from "react-redux"

export const UserRoutes = () => {
    //para obtener el contexto del login
    const { isAdmin } = useSelector( state => state.auth); 
    return (

        <>
            <NavBar />
            <Routes>
                <Route path="users" element={<UsersPage />} />
                <Route path="users/page/:page" element={<UsersPage />} />

                {!isAdmin || <>
                    <Route path="users/register" element={<RegisterPage />} />
                    <Route path="users/edit/:id" element={<RegisterPage  />} />
                    </>
                }
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}