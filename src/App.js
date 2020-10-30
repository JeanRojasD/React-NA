import React from 'react';
import logo from './logo.svg';

import './App.css';

import Menu from './components/Menu'
import Rodape from './components/Rodape';
import Slider from './components/Slider';

function App() {
  return (
    <div>
      <Menu />
      <Rodape />
      <Slider />
    </div>
  );
}

export default App;
