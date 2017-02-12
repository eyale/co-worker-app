export default function search(state = [], action) {
    switch(action.type) {
      case 'SEARCH_FILTER': {
        console.log(state);
        return state
      }
      default:
      return state
    }
}
