import authReducer from './authReducer';
import projectReducter from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducter,
})

export default rootReducer;
