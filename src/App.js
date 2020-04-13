import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

import './App.scss';
import { LandingPage, MinecraftPage } from './components/pages';
import { Navbar, Footer } from './components/widgets';

function App() {
  return (
    <Router>
      <Navbar />
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
