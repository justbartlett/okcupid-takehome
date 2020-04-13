import React, { FC } from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { actionCreators } from '../modules/madlibs';
import {ApplicationState} from '../modules';
import Essay from '../components/Essay';
import Questions from '../components/Questions';


const questionSelector = (state:ApplicationState) => state.madlib.fields;

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