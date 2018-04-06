import { createStore, combineReducers } from 'redux'
import {SignIn} from './ducks'
import { reducer as formReducer } from 'redux-form'

var reducers = combineReducers({
    signIn: SignIn,
    form: formReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;