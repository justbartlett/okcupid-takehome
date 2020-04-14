import { fork, takeLatest, put, select } from 'redux-saga/effects';
import {
  actions,
  actionCreators
} from '../modules/madlibs';

export function* setEssaySaga() {
  const state = yield select();
  const essaySentences = state.madlib.essaySentences;
  const essay = essaySentences.join(' ').trim();
  yield put(actionCreators.setEssay(essay));
}

export function* takeSetEssaySentenceSaga() {
  yield takeLatest(actions.SET_ESSAY_SENTENCE, setEssaySaga);
}

export default function* rootSaga() {
  yield fork(takeSetEssaySentenceSaga);
}