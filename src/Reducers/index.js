import {combineReducers} from 'redux'
import todos from './todos'
import visibility from './VisibilityReducer'

export default combineReducers({
    todos:todos,
    visibility: visibility
})
