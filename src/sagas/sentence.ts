import { fork, takeLatest, put, select } from 'redux-saga/effects';
import { actions, actionCreators } from '../modules/madlibs';
import { getTemplate, randomArrayItem } from '../utils/helpers';
import { Action, Question } from '../utils/types';

export function* setEssaySentenceSaga(action: Action) {
  const { name } = action.payload;
  const state = yield select();
  const questions = state.madlib.questions;
  const answer = questions.reduce((current: string, question: Question) => question.name === name ? question.answer : current, '');
  const template = randomArrayItem(getTemplate(name));
  const index = questions.reduce((current: string, question: Question, i:number) => question.name === name ? i : current, -1)
  const essaySentence = template.replace(/\$answer/, answer);
  yield put (actionCreators.setTemplateSentence(template, index));
  yield put(actionCreators.setEssaySentence(essaySentence, index))
}

export function* takeSetQuestionSaga() {
  yield takeLatest(actions.SET_QUESTION, setEssaySentenceSaga);
}

export default function* rootSaga() {
  yield fork(takeSetQuestionSaga);
}