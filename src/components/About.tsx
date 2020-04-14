import React, { FC } from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../modules';
import Essay from './Essay';
import Questions from './Questions';

const questionSelector = (state:ApplicationState) => state.madlib.questions;

const About: FC = () => {
  const questions = useSelector(questionSelector);
  return (
    <div className="container">
      <Questions questions={questions} />
      <Essay />
    </div>
  );
};

export default About;