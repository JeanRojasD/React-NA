import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Content from './pages/Content';
import Forum from './pages/Forum';
import SpecificModel from './pages/Specific-model';
import Register from './pages/Register';
import Notfound from './pages/Notfound';
import Forum_2 from './pages/Forum_2';
import Page_forum_3 from './pages/Forum_3';
import wordlogo from './assets/images/word.png';
import exlogo from './assets/images/excel.png';
import pplogo from './assets/images/powerpoint.png';
import gdlogo from './assets/images/googledrive.png';




function Routes() {

  const dinamicRoutes = [
    {
      path:"/word",
      model: {
        color:'#2A5893',
        text: "O Microsoft Word é software um editor de textos, cartas e documentos desenvolvido pela Microsoft Office, foi criado por Richard Brodie para computadores em 1983. Faz parte do conjunto de aplicativos Microsoft Office.",
        logo:wordlogo
      }
    },
    {
      path: "/excel",
      model: {
        color: '#207245',
        text: "O Microsoft Excel é software de edição de planilhas, com ferramentas de cálculo e de construção de tabelas personalizadas, foi lançado para o Windows em 1985 e faz parte do conjunto de aplicativos Microsoft Office.",
        logo:exlogo
      }
    },
    {
      path: "/powerpoint",
      model: {
        color: '#d14424',
        text: "Microsoft PowerPoint é um software utilizado para criação, edição e exibição de apresentações gráficas, é constantemente usado em apresentações. Foi lançado em 1990 e hoje faz parte do conjunto de aplicativos Microsoft Office.",
        logo: pplogo
      }
    },
    {
      path: "/googledrive",
      model: {
        color: '#ffd04c',
        text: "Google Drive é um serviço de armazenamento e sincronização de arquivos em nuvem, permitindo armazenar arquivos através deste serviço e acedê-los a partir de qualquer computador ou outros dispositivos compatíveis, foi lançado pelo Google em 2012.",
        logo: gdlogo
      }
    },
  ]

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/conteudos" component={Content} />
          <Route path="/forum" component={Forum} />
          {
            dinamicRoutes.map((item, m) => <Route key={m} path={item.path}><SpecificModel model={item.model}></SpecificModel></Route>
)
          } 
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