import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

export const Paginator = ({url}) => {

    const { paginator } = useSelector (state => state.users);
    console.log ("paginator: ", paginator);
    return (
        <>
            { paginator?.totalPages == 1 ||
                <ul className="pagination">
                    {paginator.number == 0 || 
                        <li className="page-item">
                            <Link className="page-link" to ={`${url}/${paginator.number-1}`}>atrás</Link>
                        </li>
                    }

                    <li className={ paginator.first ? 'page-item disabled' : 'page-item'}>
                        <Link className="page-link" to={`${url}/0`}>primera</Link>
                    </li>
                    <li className={ paginator.last ? 'page-item disabled' : 'page-item'}>
                        <Link className="page-link" to={`${url}/${paginator.totalPages - 1}`}>última</Link>
                    </li>
                    
                    {paginator.number >= paginator.totalPages - 1 || 
                        <li className="page-item">
                            <Link className="page-link" to ={`${url}/${paginator.number+1}`}>siguiente</Link>
                        </li>
                    }
                </ul>
            }
        </>
    )
}