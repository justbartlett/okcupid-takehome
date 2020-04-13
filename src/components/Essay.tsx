import React, { FC } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/essay.scss';

interface EssayProps {
}

const Essay: FC<EssayProps> = () => {
  return (
    <div className="essay">
      <h2>Your essay text</h2>
      <p>Originally from Narnia. Can't get enough Turkish delight. I turn my enemies to stone whenever I get the chance. Send me a message if you don't mind winter.</p>
      <NavLink to="/edit">
        <button>Edit</button>
      </NavLink>
    </div>
  );
};


export default Essay;