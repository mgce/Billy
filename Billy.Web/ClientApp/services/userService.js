import axios from 'axios';

function login (username, password){
    return axios.post('/account',{
        Username: username,
        Password: password
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