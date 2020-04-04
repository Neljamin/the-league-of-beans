import React from 'react';

import './App.scss';
import { LandingPage } from './components/pages';
import { Navbar, Footer } from './components/widgets';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
