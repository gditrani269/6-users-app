import axios from "axios"

const BASE_URL = 'http://localhost:8080/users';
const config = {
    headers: {
        "Authorization": sessionStorage.getItem('token'),
        "Content-Type": "application/json",
    }
}
export const findAll = async () => {
    try {
        const response = await axios.get (BASE_URL);
        return response;
    } catch {
        console.log (error);
    }
    return null;
}

export const save = async ({username, email, password}) => {
    try {
        return await axios.post (BASE_URL, {
            username,
            email,
            password,
        }, config);
    } catch (error) {
        throw error;
    }

}

export const update = async ({id, username, email}) => {
    try {
        return await axios.put (`${BASE_URL}/${id}`, {
            username,
            email,
            //password: 'nothing', //pongo un password fantasma porque el backend lo espera siempre, aunque no lo use como es el caso del update
        }, config)
    } catch (error) {
        throw error;
    }

}

export const remove = async (id) => {
    try {
        await axios.delete (`${BASE_URL}/${id}`, config);
    } catch (error) {
        console.error (error);
    }
}