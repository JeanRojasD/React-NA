import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Sobre from './pages/Sobre';
import Content from './pages/Content';
import Specific from './pages/Specific';
import Register from './pages/Register';
import Notfound from './pages/Notfound';
import Forumpage2 from './pages/Forum-page2';
import Profile from './pages/Recuperar-senha'

function Routes() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/conteudos" component={Content} />
          <Route path="/forum" component={Forum} />
          <Route path="/conteudos/especificos" component={Specific} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/registro" component={Register} />
          <Route path="/forumposts" component={Forumpage2} />
          <Route path="/recuperarsenha" component={Profile} />
          <Route path="*" component={Notfound} />          
        </Switch>
      </div>
    </Router>
  );
}
export default Routes;