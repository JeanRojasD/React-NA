import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu'
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
          <Route path="/content" exact component={Content} />
          <Route path="/forum" exact component={Forum} />
          <Route path="/specific" exact component={Specific} />
          <Route path="/sobre" exact component={Sobre} />
        </Switch>
      </div>
    </Router>
  );
}
export default Routes;