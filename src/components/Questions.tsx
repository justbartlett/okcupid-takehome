import React, { FC } from 'react';
import Question from './Question';
import { QuestionsProps } from '../utils/types';
import '../styles/questions.scss';

const Questions: FC<QuestionsProps> = ({questions}) => {
  return (
    <div className="questions">
      <h1>About Me</h1>
      <form>
        {questions.map((question, key) => (
            <Question key={key} fieldText={question.question} fieldName={question.name} />
          ))}
      </form>
    </div>
  );
};


export default Questions;