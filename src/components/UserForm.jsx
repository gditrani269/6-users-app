import { useEffect, useState } from "react"

export const UserForm = ( { userSelected, handlerAddUser, initialUserForm }) => {

    const [userForm, setUserForm ] = useState (initialUserForm);

    const { id, username, password, email } = userForm;

    //este useEffect se dispara cuando se llama al UserRow y viene un cambio en el objeto userSelected
    useEffect (() => {
        setUserForm ({
            ...userSelected,
            //password: '',
        })
    }, [userSelected])
    
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
        //console.log (userForm)
        //guardar el userForm en el listado de usuarios, o sea limpia el formulario
        handlerAddUser (userForm);
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
            <input type="hidden"
                name="id"
                value={id} />
            <button
                className="btn btn-primary"
                type="submit">
                {/* Si el id es 0 el label del boton es Crear, si el id es mayor a cero, se trata de un update, entonces el label del boton es Editar */}
                { id > 0?  'Editar' : 'Crear'}
            </button>
        </form>
    );
}