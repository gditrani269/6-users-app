import usersApi from "../apis/usersApi";

const BASE_URL = '';
//reemplazamos el codigo de abajo con un interceptor axios que implementamos en nuestra usersApi
/* 
const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    }
} */

export const findAll = async () => {
    try {
        const response = await usersApi.get (BASE_URL);
        return response;
    } catch {
        console.log (error);
        throw error;
    }
}

export const save = async ({username, email, password, admin}) => {
    try {
        return await usersApi.post (BASE_URL, {
            username,
            email,
            password,
            admin,
        });
    } catch (error) {
        throw error;
    }

}

export const update = async ({id, username, email, admin }) => {
    try {
        return await usersApi.put (`${BASE_URL}/${id}`, {
            username,
            email,
            admin,
            //password: 'nothing', //pongo un password fantasma porque el backend lo espera siempre, aunque no lo use como es el caso del update
        })
    } catch (error) {
        throw error;
    }

}

export const remove = async (id) => {
    try {
        await usersApi.delete (`${BASE_URL}/${id}`);
    } catch (error) {
        console.error (error);
        throw error;
    }
}