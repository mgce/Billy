import axios from 'axios';
import config from './config';
import {Helpers} from 'Others';

const BillyHttpClient = {
    getInstance: function(){
        return axios.create({
            baseUrl: config.BASIC_URL,
            timeout: 1000,
            headers: {'Authentication': Helpers.authHeader()}
        })
    },
    authenticate(){
        let isAuthenticated = false;
        const jwt = Helpers.authHeader();
        return axios.get('account/validate',{
            headers: {'Authorization':jwt}
          });
    },
    login(username, password, signIn){
        axios.post('/account',{
            Username : username,
            Password : password
        })
        .then(res => localStorage.setItem('user', res.data.token)
        ).catch(error => console.log(error));

        return this.authenticate();
    }
}

export default BillyHttpClient;
