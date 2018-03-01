import firebase from 'firebase';

export const gradientsFetch = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/gradients')
      .once('value')
      .then(snapshot => {
        dispatch({
          type: 'gradients_fetch_success',
          payload: snapshot.val()
        });
      });
  };
};
