

//si estamos autenticados va a cargar la UserPage
//si NO estamos autenticados va a cargar la pagin LoginPage

import { Provider } from "react-redux"
import { AppRoutes } from "./AppRoutes"
import { store } from "./store/store"

export const UsersApp = () => {

    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
        
    )

}