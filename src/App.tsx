import React, {FC} from 'react';
import { Route, Switch } from 'react-router';
import About from './containers/About';
import Edit from './containers/Edit';
import './styles/app.scss';

const App: FC = () => {
  return (
    <div>
      <Switch>
        <Route path='/edit'>
          <Edit />
        </Route>
        <Route path='/'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;