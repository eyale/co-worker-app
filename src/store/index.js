import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';

const analytics = store => next => action => {
    let result = next(action);
    if (action.type === 'TOGGLE_USER') {
            // console.log('Sending to Google Analitics')
    }
    return result;
}

const logger = createLogger();
const store = createStore(
    rootReducer
    , composeWithDevTools(applyMiddleware(logger, analytics))
)

export default store;
