import { combineReducers } from 'redux';
import GradientsReducer from './GradientsReducer';
import AuthReducer from './AuthReducer';
import FavoriteReducer from './FavoriteReducer';

export default combineReducers({
  gradients: GradientsReducer,
  auth: AuthReducer,
  favorites: FavoriteReducer
});
