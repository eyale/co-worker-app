import {createStore} from 'redux'
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './reducers'

let store = createStore(todoApp)

console.log(store.getStore())
let unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reduers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()