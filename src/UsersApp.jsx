import { useReducer} from 'react';
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { loginReducer } from './auth/reducers/loginReducer';
import Swal from 'sweetalert2';

//si estamos autenticados va a cargar la UserPage
//si NO estamos autenticados va a cargar la pagin LoginPage
const initialLogin = {
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
            })
        } else {
            Swal.fire ('Error login', 'Username y/o ppasword invalidos', 'error');
        }
    }

    return (
        <>
            {
            login.isAuth
                ? <UsersPage />
                : <LoginPage handlerLogin={ handlerLogin }/>
            }
            {/*<UsersPage />*/}
        </>
    );
}