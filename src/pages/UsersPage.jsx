import { useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UsersPage = () => {

    const {
        users,
        visibleForm,
        
        handlerOpenForm,
        getUsers,
    } = useUsers ();

    //para obtener el contexto del login
    const { login } = useAuth();

    useEffect (() => {
        getUsers ();
    }, []);
    
    return (
        <>
            {!visibleForm || 
                <UserModalForm />
            }

            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    
                    <div className="col">
                        {/*el boton solo se muestra cuando es dministrador o el modal no esta activo*/}
                        {(visibleForm || !login.isAdmin) ||  <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                                Nuevo Usuario
                            </button>
                        }
                        
                        {/*verifica si hay usuario que mostrar*/}
                        { users.length === 0
                            ? <div className="alert alert-warning">No hay usuarios ne el sistema!</div>
                            : <UsersList />}
                    </div>
                </div>
            </div>
        </>
    );
}