import { createStore, combineReducers, applyMiddleware } from 'redux';
import {SignIn, Login, Register} from './ducks';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { routerMiddleware, routerReducer  } from 'react-router-redux'
import {history} from './history';

const middleware = [
    thunk,
    routerMiddleware(history)
]

var reducers = combineReducers({
    routing: routerReducer,
    signIn: SignIn,
    login: Login,
    register: Register,
    form: formReducer
})

const store = createStore(
    reducers,
    applyMiddleware(...middleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;