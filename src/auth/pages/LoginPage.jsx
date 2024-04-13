import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: '',
}

export const LoginPage = () => {

    const [ LoginForm,setLoginForm ] = useState (initialLoginForm);
    const { username, password } = LoginForm;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setLoginForm ({
            ...LoginForm,
            [ name ]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault (); //esto es para que no se recargue la pagian cuandose pulsa el boton
        if (!username || !password) {
            Swal.fire ('Error de validacion', 'Username y ppasword requeridos', 'error');
        }
        //aca implementamos el login
        if (username === 'admin' && password === '12345') {
            //handler login
        } else {
            Swal.fire ('Error login', 'Username y/o ppasword invalidos', 'error');
        }
        //reiniciar los datos del formulario
        setLoginForm (initialLoginForm);
    }
    return (
        <div className="modal" style={ {display: "block"}} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>
                    <form onSubmit={ onSubmit }>
                        <div className="modal-body">
                            <input 
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={ onInputChange }/>
                            <input 
                                className="form-control my-3 w-75"
                                placeholder="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={ onInputChange }/>
                        </div>
                        <div className="modal-footer">
                            <button  className="btn btn-primary"
                                type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}