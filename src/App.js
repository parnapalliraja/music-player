import React from 'react'

import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import Menu from './components/Menu';

import './App.css';
import Music from './components/Music';
import Pnf from './components/Pnf';
import Track from './components/Track';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path={'/'} element={<Music />} />
        <Route path={'/music'} element={<Music />} />
        <Route path={'/tracks/:id'} element={<Track />} />
        <Route path={'/*'} element={<Pnf />} />
      </Routes>
    </Router>
  );
}

export default App;
