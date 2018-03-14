export default (state = [], action) => {
  switch (action.type) {
    case 'favorites_fetched':
      return action.payload.favList;
    case 'favorites_fetch_success':
      return action.payload.favList;
    default:
      return state;
  }
};
