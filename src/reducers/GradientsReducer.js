import gradientsData from '../data/gradients.json';

export default (state = gradientsData, action) => {
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
      console.log('gradients_fetch_success', action);
      return state;
    default:
      return state;
  }
};
