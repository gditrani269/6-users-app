import axios from "axios";

export const loginUser = async ({username, password}) => {
    console.log ("username: ", username);
    console.log ("password: ", password);
    try {
        return  await axios.post ('http://127.0.0.1:8080/login', {
            username,
            password,
        });
    } catch (error){
        throw error;
    }
}