export const addUser = (
  name
  , surname
  , position
  , team
  , email
) => ({
    type: 'ADD_USER'
    ,id: Date.now()
    ,name
    ,surname
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

export const searchFilter = (filter) => ({
    type: 'SEARCH_FILTER',
    filter
})
