import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Sobre from './pages/Sobre';
import Content from './pages/Content'
import Specific from './pages/Specific'

function Routes() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/content" component={Content} />
          <Route path="/forum" component={Forum} />
          <Route path="/specific" component={Specific} />
          <Route path="/sobre" component={Sobre} />
          <Route path="*" component={Sobre} />
        </Switch>
      </div>
    </Router>
  );
}
export default Routes;