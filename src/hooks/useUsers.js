import Swal from "sweetalert2";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";
import { AuthContext } from "../auth/context/AuthContext";
import { useDispatch } from "react-redux";
import { initialUserForm, addUser, removeUser, updateUser, loadingUsers, onUserSelectedForm, onOpenForm, onCloseForm, loadingError} from "../store/slices/users/usersSlice";

export const useUsers = () => {
    //en la constante users vamos a guardar la lista de usuarios y la modificamos por medio de dispatch
    //comentamos porque lo llevamos al usersSlice
    //const [users, dispatch] = useReducer (usersReducers, initialUsers);
    const {users, userSelected, visibleForm, errors } = useSelector(state => state.users);
    const dispatch = useDispatch();

    //uso el userSelected para editar los datos del usuario seleccionado que quiero modificar
//    const [userSelected, setUserSelected] = useState (initialUserForm);

    //definicmos una nueva variable de estado para manejar si el formulario se debe mostrar o no
//    const [visibleForm, setVisibleForm ] = useState (false);

    const navigate = useNavigate ();
    const { login, handlerLogout } = useContext(AuthContext);

    const getUsers = async () => {
        try {
                const result = await findAll ();
                console.log(result);
                dispatch ( loadingUsers (result.data));
        } catch (error) {
            if (error.response?.status == 401) {
                handlerLogout ();
            }
        }

    }
    //el objeto recibido user es el que nos pasa el formulario con los datos agregados
    const handlerAddUser = async (user) => {
        //console.log (user);
        //si el campo id del user es 0, se trata de un usuario nuevo, si es distinto de 0 entonces se trata de un update de la infodel usuario
        /*let type;
        if (user.id === 0) {
            type= 'addUser'
        } else {
            type = 'updateUser'
        }*/ // este if se puede hacer con operador ternario y uedari del siguietne modo

        //validamos si es admin
        if (!login.isAdmin) return;
        let response;
        try {
            if (user.id === 0) {
                response = await save(user);
                dispatch (addUser (response.data))
            } else {
                response = await update(user);
                dispatch (updateUser(response.data));
            }

            Swal.fire(
                (user.id === 0) ? 
                'Usuario creado': 'Usuario actualizado',
                (user.id === 0) ? 
                'El usuario ha sido creado con exito': 'El usuario ha sido  actualizado con exito',
                'success'
            );
            //manejo la visibilidad del formuario
            //setVisibleForm (false);
            //setUserSelected (initialUserForm);
            handlerCloseForm();
            navigate ('/users');
        } catch (error) {
            if (error.response && error.response.status == 400) {
                dispatch (loadingError(error.response.data));
            } else if(error.response && error.response.status == 500 &&
                error.response.data?.message?.includes('constraint')) {
                    if (error.response.data?.message?.includes('UK_username')){
                        dispatch (loadingError ({username: 'El username ya existe!'}))
                    }
                    if (error.response.data?.message?.includes('UK_email')){
                        dispatch (loadingError ({email: 'El email ya existe!'}))
                    }  
                } else if (error.response?.status == 401) {
                    handlerLogout ();
            } else {
                throw error;
            }
        }
    }

    const handlerRemoveUser = (id) => {
        //console.log (id);
        //validamos si es admin
        if (!login.isAdmin) return;

        Swal.fire({
            title: "esta seguro que desea eliminar?",
            text: "cuidado el usuario sera eliminado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "si eliminar"
          }).then( async(result) => {
            if (result.isConfirmed) {
                try {
                    await remove(id); //esta llamdada no necesita ser asincrona con await dado que no necesitamso que nos responda, asi que podemos seguir sin esperar
                    dispatch(removeUser(id));

                    Swal.fire({
                        title: "Usuario Eliminado!",
                        text: "El usuario ha sido eliminado con exito",
                        icon: "success"
                    });
                } catch (error) {
                    if (error.response?.status == 401) {
                        handlerLogout ();
                    }
                }

            }
        });
        
    }

    const handlerUserSelectedForm = (user) => {
        //console.log (user);
        //setUserSelected ({...user });
        //setVisibleForm (true);
        dispatch(onUserSelectedForm({...user}))
    }

    const handlerOpenForm = () => {
        //setVisibleForm (true);
        dispatch(onOpenForm());
    }

    const handlerCloseForm = () => {
        //setVisibleForm (false);
        //setUserSelected (initialUserForm);
        dispatch(onCloseForm());
        dispatch (loadingError({}));
    }


    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        errors,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }
}