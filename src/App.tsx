import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import * as dotenv from 'dotenv';
import * as ROUTES from './constants/routes';
import { Main, Person, Press, Product } from './pages';

dotenv.config();

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={ROUTES.PRESS}>
          <Press />
        </Route>

        {/* path parameter를 이용해 동적 라우팅 */}
        <Route exact path={`${ROUTES.PERSON}/:to`}>
          <Person />
        </Route>

        <Route exact path={`${ROUTES.PRODUCT}/:product-name`}>
          <Product />
        </Route>

        <Route exact path={ROUTES.MAIN}>
          <Main />
        </Route>

        {/* 위 3가지 path에 해당하지 않는다면, 모두 다 ROUTES.MAIN로 리다이렉트 */}
        <Redirect to={{ pathname: ROUTES.MAIN }} />
      </Switch>
    </Router>
  );
}

export default App;
