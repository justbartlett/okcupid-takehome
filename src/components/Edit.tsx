import React, { FC } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { actionCreators } from '../modules/madlibs';
import { ApplicationState } from '../modules';
import "../styles/edit.scss";

const answersSelector = (state: ApplicationState) => state.madlib.essay;

const Edit: FC = () => {
  const essay = useSelector(answersSelector);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="edit">
        <div className="edit-container">
          <h1>Your essay text</h1>
          <textarea defaultValue={essay} />
          <NavLink to="/">
            <button onClick={() => dispatch(actionCreators.resetState())}>Start over</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};


export default Edit;