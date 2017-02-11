import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import UserApp from './components/UserApp.jsx';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <UserApp />
    </Provider>,
    document.getElementById('root')
);
