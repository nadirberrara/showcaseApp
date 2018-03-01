import firebase from 'firebase';
import { listenGradientFav, fetchGradientFav } from './FavoriteAction';

export const onEmailInput = value => {
  return { type: 'email_changed', payload: value };
};

export const onPasswordInput = value => {
  return { type: 'password_changed', payload: value };
};

export const onLoginButtonPress = ({ email, password, navigation }) => {
  return dispatch => {
    dispatch({ type: 'signin_success' });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: 'signin_success',
          payload: user
        });
      })
      .then(() => dispatch(listenGradientFav()))
      .then(() => dispatch(fetchGradientFav()))
      .then(() => navigation.navigate('All'))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            dispatch({
              type: 'user_created_success',
              payload: user
            });
            navigation.navigate('All');
          })
          .catch(() => {
            dispatch({
              type: 'login-failed',
              payload: 'Authentification failed'
            });
          });
      });
  };
};
