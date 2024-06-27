import axios from "axios";

export const loginUser = async (username, password) => {
    console.log ("username: ", username);
    console.log ("password: ", password);
    try {
        return  await axios.post ('http://localhost:8080/login', {
            username,
            password,
        });
    } catch (error){
        throw error;
    }
}