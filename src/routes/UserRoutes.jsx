import {Routes, Route, Navigate} from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { NavBar } from "../layout/NavBar"

export const UserRoutes = ({ login, handlerLogout }) => {

    return (

        <>
            <NavBar login={ login } handlerLogout={ handlerLogout }/>
            <Routes>
                <Route path="users" element={<UsersPage />} />
                <Route path="/" element={<Navigate to="/users" />} />

            </Routes>
        </>
    )
}