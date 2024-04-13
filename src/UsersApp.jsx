import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";

//si estamos autenticados va a cargar la UserPage
//si NO estamos autenticados va a cargar la pagin LoginPage
export const UsersApp = () => {

    return (
        <>
            <LoginPage />
            {/*<UsersPage />*/}
        </>
    );
}