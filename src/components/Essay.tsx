import React, { FC } from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { ApplicationState } from '../modules';
import { checkNull } from '../utils/helpers';
import '../styles/essay.scss';

const templatesSelector = (state: ApplicationState) => state.madlib.templateSentences;
const answersSelector = (state: ApplicationState) => state.madlib.questions

const Essay: FC = () => {
  const templates = useSelector(templatesSelector);
  const answers = useSelector(answersSelector);
  return (
    <div className="essay">
      <h2>Your essay text</h2>
      <p>
        {templates.map((template: string, index: number) => {
          const reg = new RegExp(/(\$\banswer+\b)/, 'gi');
          const parts = template.split(reg);
          return <span key={index}>{parts.map((part: string, key: number) => (part.match(reg) ? <strong key={key}>{answers[index].answer}</strong> : part))} </span>;
        })}
      </p>
      { templates.every(checkNull) &&
        <NavLink to="/edit">
          <button>Edit</button>
        </NavLink>
      }
    </div>
  );
};


export default Essay;