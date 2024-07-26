import axios from "axios";

export const loginUser = async ({username, password}) => {
    console.log ("username: ", username);
    console.log ("password: ", password);
    try {
        return  await axios.post (`${import.meta.env.VITE_API_BASE_URL}/login`, {
            username,
            password,
        });
    } catch (error){
        throw error;
    }
}