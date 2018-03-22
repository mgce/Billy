import React from 'react';

const Helpers = {
    emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    isEmpty: function(value){
        if(value == ""){
            return true;
        }
            return false;
    },
    isUndefinedOrNull: function(value){
        if(value == null || value == undefined){
            return true;
        }
        return false;
    },
    isEmptyOrUndefined: function(value){
        if(this.isEmpty(value) || this.isUndefinedOrNull(value)){
            return true;
        }
        return false;
    }
}

export default Helpers;