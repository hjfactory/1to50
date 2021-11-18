import React from 'react'

import './App.css';
import Game from './components/Game';

import {RecoilRoot} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Game />
    </RecoilRoot>
    
  );
}

export default App;
