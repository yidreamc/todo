import { combineReducers,createStore } from 'redux'

import todosReducer from './todos/reducer'
import filterReducer from './filter/reducer'

const reducer = combineReducers({
    filter: filterReducer,
    todos: todosReducer
});

export default createStore(reducer);