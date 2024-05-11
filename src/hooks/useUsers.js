import { usersReducers } from "../reducers/usersReducers";
import Swal from "sweetalert2";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { findAll } from "../services/userService";

const initialUsers = [];

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

    //definicmos una nueva variable de estado para manejar si el formulario se debe mostrar o no
    const [visibleForm, setVisibleForm ] = useState (false);
    const navigate = useNavigate ();

    const getUsers = async () => {
        const result = await findAll ();
        console.log(result);
        dispatch ({
            type: 'loadingUsers',
            payload: result.data,
        });
    }
    //el objeto recibido user es el que nos pasa el formulario con los datos agregados
    const handlerAddUser = (user) => {
        //console.log (user);
        //si el campo id del user es 0, se trata de un usuario nuevo, si es distinto de 0 entonces se trata de un update de la infodel usuario
        /*let type;
        if (user.id === 0) {
            type= 'addUser'
        } else {
            type = 'updateUser'
        }*/ // este if se puede hacer con operador ternario y uedari del siguietne modo
        const type = (user.id === 0) ? 'addUser' : 'updateUser';

        dispatch ({
            type: type,
            payload: user,
        })

        Swal.fire(
            (user.id === 0) ? 
            'Usuario creado': 'Usuario actualizado',
            (user.id === 0) ? 
            'El usuario ha sido creado con exito': 'El usuario ha sido  actualizado con exito',
            'success'
        );
        //manejo la visibilidad del formuario
        setVisibleForm (false);
        setUserSelected (initialUserForm);
        navigate ('/users');
    }

    const handlerRemoveUser = (id) => {
        //console.log (id);
        Swal.fire({
            title: "esta seguro que desea eliminar?",
            text: "cuidado el usuario sera eliminado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "si eliminar"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch ({
                    type: 'removeUser',
                    payload: id,
                })
                Swal.fire({
                    title: "Usuario Eliminado!",
                    text: "El usuario ha sido eliminado con exito",
                    icon: "success"
                });
            }
        });
        
    }

    const handlerUserSelectedForm = (user) => {
        //console.log (user);
        setUserSelected ({...user });
        setVisibleForm (true);
    }

    const handlerOpenForm = () => {
        setVisibleForm (true);
    }

    const handlerCloseForm = () => {
        setVisibleForm (false);
        setUserSelected (initialUserForm);
    }


    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }
}