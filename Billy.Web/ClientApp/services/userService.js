import axios from 'axios';

function login (username, password){
    return axios.post('/account',{
        Username: username,
        Password: password
    }).then(response => {
        if(response.status !== 200){
            return Promise.reject(response.statusText)
        }
        return response.data;
    }).then(user =>{
        if(user && user.token){
            localStorage.setItem("user", JSON.stringify(user))
        }
    })
}

function register(user){
    return axios.post('/account/register', {
        Email: user.email,
        UserName: user.username,
        Password: user.password
    }).then(response=>{
        if(response.status !== 200){
            return Promise.reject(response.statusText)
        }
        return response.data
    }).then(user =>{
        if(user && user.token){
            localStorage.setItem("user", JSON.stringify(user))
        }
    })
}

export const userService = {
    login,
    register
};