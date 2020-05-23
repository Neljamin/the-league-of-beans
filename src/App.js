import React from 'react';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";

import './App.scss';
import { LandingPage, MinecraftPage } from './components/pages';
import { Navbar, Footer } from './components/widgets';

const LINKS = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Minecraft',
    route: '/minecraft'
  }
];

function App() {
  return (
    <Router>
      <Navbar links={LINKS} />
      <Route path="/minecraft">
        <MinecraftPage />
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
