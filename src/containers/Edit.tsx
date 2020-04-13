import React, { FC } from 'react';
import {NavLink} from 'react-router-dom';
import "../styles/edit.scss";

interface EditProps {
}

const Edit: FC<EditProps> = () => {
  return (
    <div className="container">
      <div className="edit">
        <div className="edit-container">
          <h1>Your essay text</h1>
          <textarea readOnly value="Originally from Narnia. Can't get enough Turkish delight. I turn my enemies to stone whenever I get the chance. Send me a message if you don't mind winter." />
          <NavLink to="/">
            <button>Start over</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};


export default Edit;