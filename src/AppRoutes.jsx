
import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";

export const AppRoutes = () => {
    const { login } = useContext (AuthContext)

    return (
        <Routes>
            {/*Cuando no este autenticado, cualquier ruta lo va a llegar al login por el <Route path="/*" element={ <Navigate to="/login" />} /> */}
            {
                login.isAuth
                    ? (
                        <Route path="/*" element={ <UserRoutes />} />
                    )
                    : <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/*" element={ <Navigate to="/login" />} />
                    </>
                    
            }
            {/*<UsersPage />*/}
        </Routes>
    );
}