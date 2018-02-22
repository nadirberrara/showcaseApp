import { combineReducers } from 'redux';
import GradientsReducer from './GradientsReducer';

export default combineReducers({
  gradients: GradientsReducer
});
