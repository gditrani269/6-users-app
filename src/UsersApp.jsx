
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { NavBar } from './layout/NavBar';
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";


//si estamos autenticados va a cargar la UserPage
//si NO estamos autenticados va a cargar la pagin LoginPage

export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout} = useAuth ();
    
    return (
        <Routes>
            {/*Cuando no este autenticado, cualquier ruta lo va a llegar al login por el <Route path="/*" element={ <Navigate to="/login" />} /> */}
            {
                login.isAuth
                    ? (
                        <Route path="/*" element={ <UserRoutes 
                            login={login} 
                            handlerLogout={handlerLogout}/>} />
                    )
                    : <>
                        <Route path="/login" 
                            element={<LoginPage 
                                handlerLogin={ handlerLogin }/>} />
                                <Route path="/*" element={ <Navigate to="/login" />} />
                    </>
                    
            }
            {/*<UsersPage />*/}
        </Routes>
    );
}