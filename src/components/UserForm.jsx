import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ( { userSelected, handlerCloseForm }) => {

    const { initialUserForm, handlerAddUser, errors } = useContext (UserContext);

    const [userForm, setUserForm ] = useState (initialUserForm);

    const { id, username, password, email } = userForm;

    //este useEffect se dispara cuando se llama al UserRow y viene un cambio en el objeto userSelected
    useEffect (() => {
        setUserForm ({
            ...userSelected,
            password: '',
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
        //vamos a validar que los campos del form no esten vacios y hace un tratamiento especial para el caso del campo password, para el caso que se trate de un update, en ese caso no tiene en cuenta el cmapo pasword
/*        if (!username || (!password && id === 0) || !email) {
            Swal.fire({
                title: "Error de validacion",
                text: "Debe completar todos los campos del formularios",
                icon: "error"
            });

            return;
        }
        //verifica que el email tenga formato de email con el @
        if (!email.includes ('@')) {
            Swal.fire({
                title: "Error de validacion del email",
                text: "El email debe ser valido, incluir un @!",
                icon: "error"
            });      
            return;      
        }*/
        //console.log (userForm)
        //guardar el userForm en el listado de usuarios, o sea limpia el formulario
        handlerAddUser (userForm);
        setUserForm (initialUserForm);
    }

    const onCloseForm = () => {
        //cerramos el forulario y lo reseteamos
        handlerCloseForm ();
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
            {/*solo muestra el campo password para el caso de nuevos usuarios, o sea id = 0 */}
            { id > 0?  '' : <input
                className="form-control my-3 w-75"
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={ onInputChange } />}
            
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

            {/* verifica si hay funcion handlerCloseForm para ver si muestra o no el boton cerrar*/}
            {!handlerCloseForm || 
            <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()}>
                Cerrar
            </button>}
        </form>
    );
}