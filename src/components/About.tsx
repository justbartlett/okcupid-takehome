import React, { FC } from 'react';
import {NavLink} from 'react-router-dom';
import "../styles/about.scss";

interface AboutProps {
}

const About: FC<AboutProps> = () => {
  return (
    <div className="container">
      <div className="questions">
        <h1>About Me</h1>
        <form>
          <label>
            Where did you grow up?
            <input type="text" />
          </label>
          <label>
            What's your favorite food?
            <input type="text" />
          </label>
          <label>
            What do you LOVE to do?
            <input type="text" />
          </label>
          <label>
            People should message you if they...
            <input type="text" />
          </label>
        </form>
      </div>
      <div className="essay">
        <h2>Your essay text</h2>
        <p>Originally from Narnia. Can't get enough Turkish delight. I turn my enemies to stone whenever I get the chance. Send me a message if you don't mind winter.</p>
        <NavLink to="/edit">
          <button>Edit</button>
        </NavLink>
      </div>
    </div>
  );
};


export default About;