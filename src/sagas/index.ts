import { fork } from 'redux-saga/effects';
import sentence from './sentence';
import essay from './essay';

export default function* rootSaga() {
  yield fork(sentence);
  yield fork(essay);
}