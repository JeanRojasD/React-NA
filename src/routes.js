import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Forum from './pages/Forum';
import Sobre from './pages/Sobre';
import Content from './pages/content'
import Specific from './pages/specific'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/content" exact component={Content} />
        <Route path="/forum" exact component={Forum} />
        <Route path="/specific" exact component={Specific} />
        <Route path="/sobre" exact component={Sobre} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;