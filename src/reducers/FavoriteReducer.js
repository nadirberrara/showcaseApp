export default (state = [], action) => {
  switch (action.type) {
    case 'favorites_fetched':
      console.log(action.payload.favList);
      return action.payload.favList;
    default:
      return state;
  }
};
