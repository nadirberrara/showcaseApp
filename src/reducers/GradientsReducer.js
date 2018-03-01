export default (state = {}, action) => {
  switch (action.type) {
    case 'gradients_fetch_success':
      return action.payload;
    default:
      return state;
  }
};
