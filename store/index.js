import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GetDataReducer from './reducers/getData'
import GetUserReducer from './reducers/getUserProfile'
import Register from './reducers/register'
const reducers = combineReducers({
    GetDataReducer: GetDataReducer,
    GetUserReducer: GetUserReducer,
    RegisterReducer: Register
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;