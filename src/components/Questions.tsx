import React, { FC } from 'react';
import Question from './Question';
import '../styles/questions.scss';

interface QuestionsProps {
  questions: {};
}

const Questions: FC<QuestionsProps> = ({questions}) => {
  return (
    <div className="questions">
      <h1>About Me</h1>
      <form>
        {Object.entries(questions).map(([key, value]) => (
          <Question key={key} fieldText={value} fieldName={key} onBlur={() => {}} />
        ))}
      </form>
    </div>
  );
};


export default Questions;