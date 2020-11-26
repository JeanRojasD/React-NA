import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Content from './pages/Content';
import Specific_word from './pages/Specific_word';
import Specific_excel from './pages/Specific_excel';
import Specific_pp from './pages/Specific_pp';
import Specific_drive from './pages/Specific_drive';
import Register from './pages/Register';
import Notfound from './pages/Notfound';

function Routes() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/conteudos" component={Content} />
          <Route path="/word" component={Specific_word} />
          <Route path="/excel" component={Specific_excel}/>
          <Route path="/powerpoint" component={Specific_pp}/>
          <Route path="/googledrive" component={Specific_drive}/>
          <Route path="/sobre" component={Sobre} />
          <Route path="/registro" component={Register} />
          <Route path="*" component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}
export default Routes;