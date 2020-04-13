import React, {FC} from 'react';
import { Redirect, Route, Switch } from 'react-router';
import About from '../components/About';
import Edit from '../components/Edit';
import '../styles/app.scss';

const App: FC = () => {
  return (
    <div>
      <Switch>
        <Route path='/edit' component={Edit} />
        <Route path='/' component={About} />
      </Switch>
    </div>
  );
}

export default App;
