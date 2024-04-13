export const loginUser = (userlogin) => {

    return (userlogin.username === 'admin' && userlogin.password === '12345')? true : false;
}