import { combineReducers }  from 'redux'
import navigator from './navigatorReducer'
import todos from './todosReducer'

export default combineReducers({
  navigator,
  todos
})
