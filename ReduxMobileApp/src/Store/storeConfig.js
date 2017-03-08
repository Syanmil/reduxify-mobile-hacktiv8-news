import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../Reducers';
import thunk from 'redux-thunk'

const Middleware = applyMiddleware(thunk)

export const store = createStore(rootReducers, Middleware)
