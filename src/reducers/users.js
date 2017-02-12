function user(state, action) {
    switch (action.type) {
        case 'ADD_USER': {
            return {
                id: action.id
                ,name: action.name
                ,surname: action.surname
                ,position:action.position
                ,team: action.team
                ,email: action.email
                ,completed: false
            };
        }
        case 'TOGGLE_USER': {
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        }
        default: {
            return state;
        }
    }
};

export default function users(state = [], action) {
    switch (action.type) {
        case 'ADD_USER': {
            return [
                ...state,
                user(undefined, action)
            ];
        }
        case 'TOGGLE_USER': {
            return state.map(item => user(item, action));
        }
        default: {
            return state;
        }
    }
};
