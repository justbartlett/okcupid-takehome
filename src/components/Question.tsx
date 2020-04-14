import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../modules/madlibs';
import { QuestionProps } from '../utils/types';
import '../styles/question.scss';

const Question: FC<QuestionProps> = ({fieldText, fieldName}) => {
  const dispatch = useDispatch();
  return (
    <div className="question">
      <label className="question-label">
        {fieldText}
        <input className="question-input" type="text" name={fieldName} onBlur={(evt) => {
          if (evt.target.value) {
            return dispatch(actionCreators.setField(fieldName, evt.target.value))
          }
        }} />
      </label>
    </div>
  );
};


export default Question;