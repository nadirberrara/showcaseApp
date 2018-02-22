export const toggleGradientFav = id => {
  return {
    type: 'star-toggle',
    payload: id
  };
};

export const clearAllFavorites = () => {
  return { type: 'clear-favorites' };
};
