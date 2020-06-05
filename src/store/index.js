import {createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

//此时的需要用combineReducers拆分reducers
const reducer =combineReducers(reducers);
const store=createStore(reducer,applyMiddleware(thunk));

export default store;