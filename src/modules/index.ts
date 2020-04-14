import { combineReducers } from 'redux';
import madlib from './madlibs';
import { MadlibState } from '../utils/types';

export interface ApplicationState {
  madlib: MadlibState;
}

export default combineReducers({
  madlib,
});