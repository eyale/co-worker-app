export default function filter(state = 'SHOW_ALL', action) {
    console.log(action);
    switch (action.type) {
        case 'SET_FILTER':
        case 'SEARCH_USER': {
            return action.filter;
        }
        default: {
            return state;
        }
    }
};
