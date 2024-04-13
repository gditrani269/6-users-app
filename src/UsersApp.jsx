
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { NavBar } from './layout/NavBar';
import { useAuth } from "./auth/hooks/useAuth";


//si estamos autenticados va a cargar la UserPage
//si NO estamos autenticados va a cargar la pagin LoginPage

export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout} = useAuth ();
    
    return (
        <>
            {
            login.isAuth
                ? (
                    <>
                        <NavBar login={ login } handlerLogout={ handlerLogout }/>
                        <UsersPage />
                    </>
                )
                : <LoginPage handlerLogin={ handlerLogin }/>
            }
            {/*<UsersPage />*/}
        </>
    );
}