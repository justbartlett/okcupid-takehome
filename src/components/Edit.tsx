import React, { FC } from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { ApplicationState } from '../modules';
import "../styles/edit.scss";

const answersSelector = (state: ApplicationState) => state.madlib.essay;

const Edit: FC = () => {
  const essay = useSelector(answersSelector);
  return (
    <div className="container">
      <div className="edit">
        <div className="edit-container">
          <h1>Your essay text</h1>
          <textarea defaultValue={essay} />
          <NavLink to="/">
            <button>Start over</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};


export default Edit;