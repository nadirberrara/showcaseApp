export default (state = {}, action) => {
  switch (action.type) {
    case 'star-toggle':
      return state.map(item => {
        return {
          ...item,
          fav: action.payload === item.id ? !item.fav : item.fav
        };
      });
    case 'clear-favorites':
      return state.map(item => {
        return { ...item, fav: false };
      });
    case 'gradients_fetch_success':
      console.log('gradients_fetch_success', action.payload);
      return action.payload;
    default:
      return state;
  }
};
