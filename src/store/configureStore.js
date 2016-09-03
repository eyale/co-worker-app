import { createStore } from 'redux'
import rootReducer from '../reducers'
//cashing store to use it after
//taking in arguments 
//the reducer function and the empty object
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}