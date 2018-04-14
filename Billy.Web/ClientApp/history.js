import {createBrowserHistory} from 'history';
import store from './store'
import {syncHistoryWithStore} from 'react-router-redux'

export const history = syncHistoryWithStore(createBrowserHistory(), store)