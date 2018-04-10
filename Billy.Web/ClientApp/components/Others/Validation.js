export function isRequired(value){
    if(!value || value.trim() === ''){
        return 'This field is required'
    }
}

export function isPasswordsEqual(confirmPassword, values){
    if(values != undefined && values.password !== values.confirmPassword){
        return 'Passwords must be equal'
    }
}