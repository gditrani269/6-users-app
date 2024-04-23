
import { useContext } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";

export const UsersPage = () => {

    const {
        users,
        visibleForm,
        
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
    } = useContext (UserContext);

    return (
        <>
            {!visibleForm || 
                <UserModalForm />
            }

            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    
                    <div className="col">
                        {visibleForm ||  <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                                Nuevo Usuario
                            </button>
                        }
                        
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
        </>
    );
}