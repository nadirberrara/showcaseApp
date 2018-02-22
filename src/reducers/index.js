import { combineReducers } from 'redux';
import GradientsReducer from './GradientsReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  gradients: GradientsReducer,
  auth: AuthReducer
});
