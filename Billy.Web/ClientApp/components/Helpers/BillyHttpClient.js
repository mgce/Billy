import axios from 'axios';
import config from './config';
import Helpers from './Helpers';

const BillyHttpClient = {
    getInstance: function(){
        return axios.create({
            baseUrl: config.BASIC_URL,
            timeout: 1000,
            headers: {'Authentication': Helpers.authHeader}
        })
    },
    isAuthenticated(){
        let isAuthenticated = false;

        return axios.get('account/authenticated',{},{
            headers: {'Authorization':Helpers.authHeader()}
          });
    }
}

export default BillyHttpClient;
