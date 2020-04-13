import { combineReducers } from 'redux';
import madlib, { MadlibState } from './madlibs';

export interface ApplicationState {
  madlib: MadlibState;
}

export default combineReducers({
  madlib,
});