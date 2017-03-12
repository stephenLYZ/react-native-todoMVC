import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Storage from 'react-native-storage'

import { reducer } from '../reducers/navigator'

const logger = createLogger({
  predicate: (getState, action) => __DEV__ && !!window.navigator.userAgent,
  collapsed: true,
  duration: true,
})

const middleware = [ thunk, logger ]

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
  require('../../config/ReactotronConfig')
}

export default (initialState) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware),
  )
  return store
}
