export default function search(state = [], action) {
    switch(action.type) {
      case 'SEARCH_FILTER': {
        return action.name
      }
      default:
      return state
    }
}
