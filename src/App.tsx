import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Main, Person, Press } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.PRESS}>
          <Press />
        </Route>

        <Route exact path={`${ROUTES.PERSON}/:to`}>
          <Person />
        </Route>

        <Route exact path={ROUTES.MAIN}>
          <Main />
        </Route>

        <Redirect to={{ pathname: ROUTES.MAIN }} />
      </Switch>
    </Router>
  );
}

export default App;
