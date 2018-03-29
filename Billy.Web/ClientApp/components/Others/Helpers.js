import React from 'react';

const Helpers = {
    emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    isEmpty: function(value){
        return value == "";
    },
    isUndefinedOrNull: function(value){
        return value == null || value == undefined;
    },
    isEmptyOrUndefined: function(value){
        return this.isEmpty(value) || this.isUndefinedOrNull(value);
    },
    authHeader: function(){
      let token = localStorage.getItem('user');
     // let user = JSON.parse(token);
      if (token) {
          return 'Bearer ' + token ;
      } else {
          return {};
      }
    }
}

export default Helpers;
