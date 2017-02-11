export const addUser = (text, email) => {
    return {
        type: 'ADD_USER',
        id: Date.now(),
        text,
        email
    };
};

export const toggleUser = id => {
    return {
        type: 'TOGGLE_USER',
        id
    };
};

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        filter
    };
};
