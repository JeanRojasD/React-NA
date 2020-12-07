import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Content from './pages/Content';
import Forum from './pages/Forum';
import Specificword from './pages/Specific-word';
import Specificexcel from './pages/Specific-excel';
import Specificpp from './pages/Specific-pp';
import Specificdrive from './pages/Specific-drive';
import Register from './pages/Register';
import Notfound from './pages/Notfound';
import Forum_2 from './pages/Forum_2';
import Page_forum_3 from './pages/Forum_3';

function Routes() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/conteudos" component={Content} />
          <Route path="/forum" component={Forum} />
          <Route path="/word" component={Specificword} />
          <Route path="/excel" component={Specificexcel}/>
          <Route path="/powerpoint" component={Specificpp}/>
          <Route path="/googledrive" component={Specificdrive}/>
          <Route path="/forum_comment_new" component={Forum_2} />
          <Route path="/forum_inside_post" component={Page_forum_3} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/registro" component={Register} />
          <Route path="*" component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}
export default Routes;