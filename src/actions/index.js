export const addUser = (
  name
  ,surname
  ,team
  ,position
  ,email
) => ({
    type: 'ADD_USER'
    ,id: Date.now()
    ,name
    ,surname
    ,team
    ,position
    ,email
})

export const toggleUser = (id) => ({
    type: 'TOGGLE_USER',
    id
})

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
})

export const searchUser = (name) => ({
    type: 'SEARCH_FILTER',
    name
})
