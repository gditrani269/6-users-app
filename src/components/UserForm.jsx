import { useState } from "react"

const initialUserForm = {
    username: '',
    password: '',
    email: ''
}

export const UserForm = () => {

    const [userForm, setUserForm ] = useState (initialUserForm);

    const { username, password, email } = userForm;

    const onInputChange = ({ target }) => {
 //       console.log (target.value)
        const { name, value } = target;
        setUserForm ({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault ();
        //vamos a validar que los campos del form no esten vacios
        if (!username || !password || !email) {
            alert ('Debe completar todos los campos del formularios')
            return;
        }
        console.log (userForm)
        //guardar el userForm en el listado de usuarios, o sea limpia el formulario
        setUserForm (initialUserForm);
    }

    return (
        <form onSubmit ={ onSubmit }>
            <input
                className="form-control my-3 w-75"
                placeholder="username"
                name="username"
                value= {username}
                onChange={ onInputChange } />
            <input
                className="form-control my-3 w-75"
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={ onInputChange } />
            <input
                className="form-control my-3 w-75"
                placeholder="email" 
                name="email"
                value={email}
                onChange={ onInputChange }/>
            <button
                className="btn btn-primary"
                type="submit">
                Crear
            </button>
        </form>
    );
}