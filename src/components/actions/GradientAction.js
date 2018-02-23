import firebase from 'firebase';

export const gradientsFetch = () => {
  const { currentUser } = firebase.auth();
  console.log('action', currentUser);
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
