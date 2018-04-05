import { createStore, combineReducers } from 'redux'
import {Sign} from './ducks/index'

var reducers = combineReducers({
    sign: Sign
})
export default createStore(reducers);