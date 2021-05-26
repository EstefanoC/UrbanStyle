import {createStore, combineReducers } from 'redux'
import navbar from './reducers/navbar'
import search from './reducers/search'
import review from './reducers/review'


const Reducers = combineReducers ({
    navbar,
    search,
    review
})

export default createStore(Reducers)