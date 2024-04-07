import { usersReducers } from "../reducers/usersReducers";
import { useState, useReducer } from "react";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}

export const useUsers = () => {
    //en la constante users vamos a guardar la lista de usuarios y la modificamos por medio de dispatch
    const [users, dispatch] = useReducer (usersReducers, initialUsers);

    //uso el userSelected para editar los datos del usuario seleccionado que quiero modificar
    const [userSelected, setUserSelected] = useState (initialUserForm);

    //el objeto recibido user es el que nos pasa el formulario con los datos agregados
    const handlerAddUser = (user) => {
        //console.log (user);
        //si el campo id del user es 0, se trata de un usuario nuevo, si es distinto de 0 entonces se trata de un update de la infodel usuario
        let type;
        if (user.id === 0) {
            type= 'addUser'
        } else {
            type = 'updateUser'
        }
        dispatch ({
            type: type,
            payload: user,
        })
    }

    const handlerRemoveUser = (id) => {
        //console.log (id);
        dispatch ({
            type: 'removeUser',
            payload: id,
        })
    }

    const handlerUserSelectedForm = (user) => {
        //console.log (user);
        setUserSelected ({...user });
    }

    return {
        users,
        userSelected,
        initialUserForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
    }
}