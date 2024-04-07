
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

export const UsersApp = () => {

    const {
        users,
        userSelected,
        initialUserForm,
        
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
    } = useUsers ();
    
    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm 
                        initialUserForm={ initialUserForm }
                        userSelected = { userSelected }
                        handlerAddUser={ handlerAddUser }/>
                </div>
                <div className="col">
                    {/*verifica si hay usuario que mostrar*/}
                    { users.length === 0
                        ? <div className="alert alert-warning">No hay usuarios ne el sistema!</div>
                        : <UsersList 
                            handlerUserSelectedForm= { handlerUserSelectedForm }
                            handlerRemoveUser={ handlerRemoveUser }
                            users={ users }/>}
                </div>
            </div>
        </div>
    );
}