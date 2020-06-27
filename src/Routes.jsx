import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Sobre, Products, ProductPage } from './pages';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/sobre' component={Sobre} />
      <Route exact path='/produtos' component={Products} />
      <Route exact path='/produto/:id' component={ProductPage} />
      <Route>
        <div>404 não encontrado</div>
      </Route>
    </Switch>
  );
}

export default Routes;
