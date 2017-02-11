export const addUser = (name, surname, email) => {
    return {
        type: 'ADD_USER',
        id: Date.now(),
        name,
        surname,
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
