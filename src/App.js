import React from 'react';
import logo from './logo.svg';

import './App.css';

import Menu from './components/Menu';
import Rodape from './components/Rodape';
import Content from './pages/content';

function App() {
  return (
    <div>
      <Menu />
      <Content />
      <Rodape />
    </div>
  );
}

export default App;
