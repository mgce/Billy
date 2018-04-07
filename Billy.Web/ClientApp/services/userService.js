import axios from 'axios';

function login (username, password){
    axios.post('/account',{
        Username: username,
        Passwor: password
    }).then(response => {
        if(!response.ok){
            return Promise.reject(response.statusText)
        }
        return response.data;
    }).then(user =>{
        if(user && user.token){
            localStorage.setItem("user", JSON.stringify(user))
        }
    })
}

export const userService = {
    login
};