import React, { FC } from 'react';
import '../styles/question.scss';

interface QuestionProps {
  fieldText: any,
  fieldName: string,
  onBlur: () => void
}

const Question: FC<QuestionProps> = ({fieldText, fieldName, onBlur}) => {
  return (
    <div className="question">
      <label>
        {fieldText}
        <input type="text" name={fieldName} onBlur={onBlur} />
      </label>
    </div>
  );
};


export default Question;