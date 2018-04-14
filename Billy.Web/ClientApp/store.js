import { createStore, combineReducers, applyMiddleware } from 'redux';
import {SignIn, Login, Register} from './ducks';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import {routerMiddleware, push} from 'react-router-redux';
import { browserHistory } from 'react-router'
import {createBrowserHistory} from 'history';


var reducers = combineReducers({
    routing: routerReducer,
    signIn: SignIn,
    login: Login,
    register: Register,
    form: formReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(createBrowserHistory()))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;