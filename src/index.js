//here we are importing the dependencies from libraries
// {} -> mean's that import's goes partly from whole the labrary
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import store from './store/configureStore'

//the <Provider></Provider> component
//is from Redux
//without this our app wold't  work'
//<Provider store={store}> definding the store in the Provider
//we are letting know to Provider that we are using the store
//the single store from Redux as it should in Redux app
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)