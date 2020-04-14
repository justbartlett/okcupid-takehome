import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../modules/madlibs';
import '../styles/question.scss';

interface QuestionProps {
  fieldText: any,
  fieldName: string
}

const Question: FC<QuestionProps> = ({fieldText, fieldName}) => {
  const dispatch = useDispatch();
  return (
    <div className="question">
      <label>
        {fieldText}
        <input type="text" name={fieldName} onBlur={(evt) => {
          if (evt.target.value) {
            return dispatch(actionCreators.setField(fieldName, evt.target.value))
          }
        }} />
      </label>
    </div>
  );
};


export default Question;