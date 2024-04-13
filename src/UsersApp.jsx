import { useReducer} from 'react';
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { loginReducer } from './auth/reducers/loginReducer';
import Swal from 'sweetalert2';
import { NavBar } from './layout/NavBar';


//si estamos autenticados va a cargar la UserPage
//si NO estamos autenticados va a cargar la pagin LoginPage
const initialLogin = JSON.parse (sessionStorage.getItem ('login')) || {
    isAuth: false,
    user: undefined,
}
export const UsersApp = () => {

    const [login, dispatch] = useReducer (loginReducer, initialLogin);

    const handlerLogin = ({username, password}) => {
        if (username === 'admin' && password === '12345') {
            const user = { username: 'admin'}
            dispatch ({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem ('login', JSON.stringify ({
                isAuth: true,
                user: user,
            }));
        } else {
            Swal.fire ('Error login', 'Username y/o ppasword invalidos', 'error');
        }
    }

    const handlerLogout = () => {
        dispatch ({
            type: 'logout',
        });    
        sessionStorage.removeItem ('login');
    }

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