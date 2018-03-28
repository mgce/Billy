import axios from 'axios';
import config from './config';
import Helpers from './Helpers';

const BillyHttpClient = {
    getInstance: function(){
        return axios.create({
            baseUrl: config.BASIC_URL,
            timeout: 1000,
            headers: {'Authentication': Helpers.authHeader()}
        })
    },
    isAuthenticated(){
        let isAuthenticated = false;
        const jwt = Helpers.authHeader();
        return axios.get('account/authenticated',{
            headers: {'Authorization':jwt}
          });
    }
}

export default BillyHttpClient;
