import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { reducer } from '../redux/todoRedux'

const middleware = [ thunk ]

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
  require('../config/ReactotronConfig')
}

export default (initialState) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware),
  )
  return store
}
