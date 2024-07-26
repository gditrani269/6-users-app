
import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
    const { isAuth } = useSelector (state => state.auth)

    return (
        <Routes>
            {/*Cuando no este autenticado, cualquier ruta lo va a llegar al login por el <Route path="/*" element={ <Navigate to="/login" />} /> */}
            {
                isAuth
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