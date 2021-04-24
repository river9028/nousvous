import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import * as dotenv from 'dotenv';
import * as ROUTES from './constants/routes';
import { Main, Person, Press, Product } from './pages';
import PressContext from './context/press';
import productsInfo from './fixtures/products';
import sectionFilter from './utils/section-filter';

dotenv.config();

type ProductType = {
  name: string;
  section: string;
  pname: string;
  price: number;
  'shipping-charge': { UK: number; Europe: number; Worldwide: number };
  description: string;
  'img-url': string;
  stock: number;
};

function App() {
  const [section, setSection] = useState<'' | 'info' | keyof typeof products>(
    '',
  );

  const products = sectionFilter(productsInfo as ProductType[]);

  return (
    <PressContext.Provider value={{ products, section, setSection }}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={ROUTES.PRESS}>
            <Press />
          </Route>

          {/* path parameter를 이용해 동적 라우팅 */}
          <Route exact path={`${ROUTES.PERSON}/:to`}>
            <Person />
          </Route>

          <Route exact path={`${ROUTES.PRODUCT}/:pname`}>
            <Product />
          </Route>

          <Route exact path={ROUTES.MAIN}>
            <Main />
          </Route>

          {/* 위 3가지 path에 해당하지 않는다면, 모두 다 ROUTES.MAIN로 리다이렉트 */}
          <Redirect to={{ pathname: ROUTES.MAIN }} />
        </Switch>
      </Router>
    </PressContext.Provider>
  );
}

export default App;
