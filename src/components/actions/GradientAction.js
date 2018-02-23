import firebase from 'firebase';

export const gradientsFetch = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/users/gradients')
      .on('value', snapshot => {
        dispatch({ type: 'gradients_fetch_success', payload: snapshot.val() });
      });
  };
};
