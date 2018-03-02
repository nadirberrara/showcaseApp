import firebase from 'firebase';

const favObjectToArray = favorites => {
  let favArray = [];
  if (favorites) {
    favArray = Object.keys(favorites).map(key => favorites[key]);
  }
  return favArray;
};

export const fetchGradientFav = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    return firebase
      .database()
      .ref(`${currentUser.uid}/favorites`)
      .once('value')
      .then(snapshot => {
        const favListArray = favObjectToArray(snapshot.val());
        dispatch({
          type: 'favorites_fetched',
          payload: { favList: favListArray }
        });
        console.log('fetchGradientFav -> ', favListArray);
        return snapshot.val();
      });
  };
};

export const toggleGradientFav = id => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    const favRefs = firebase.database().ref(`${currentUser.uid}/favorites`);

    dispatch(fetchGradientFav(id)).then(favList => {
      let isFav = true;
      for (const favUid in favList) {
        if (favList[favUid] === id) {
          isFav = false;
          favRefs.child(favUid).remove();
          break;
        }
      }
      if (isFav) {
        favRefs.push(id);
      }
    });
  };
};

export const listenGradientFav = id => {
  const { currentUser } = firebase.auth();
  const favRefs = firebase.database().ref(`${currentUser.uid}/favorites`);
  return dispatch => {
    favRefs.on('value', snapshot => {
      let favListArray = favObjectToArray(snapshot.val());

      if (favListArray.includes(id)) {
        favListArray = favListArray.filter(item => item !== id);
      } else {
        favListArray.push(id);
      }

      dispatch({
        type: 'favorites_fetched',
        payload: { favList: favListArray }
      });
    });
  };
};

export const clearAllFavorites = () => {
  const { currentUser } = firebase.auth();
  const favRefs = firebase.database().ref(`${currentUser.uid}`);
  return () => {
    favRefs.child('favorites').remove();
    // dispatch({ type: 'favorites_cleared' });
  };
};
