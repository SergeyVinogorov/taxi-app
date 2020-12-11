import { createStore, combineReducers } from 'redux'
import { history } from './modules/history/history.reducer'


export const store = createStore(combineReducers({ history }))