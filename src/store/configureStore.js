import { createStore } from 'redux'
// cashing store to use it after
//taking in arguments 
//the reducer function and the empty object
const store = createStore(
  () => {}, 
  {},
  console.log(`The store is created`)
)

export default store