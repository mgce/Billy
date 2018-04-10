import { createStore, combineReducers, applyMiddleware } from 'redux'
import {SignIn, Login, Register} from './ducks'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

var reducers = combineReducers({
    signIn: SignIn,
    login: Login,
    register: Register,
    form: formReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;