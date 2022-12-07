import React from 'react';
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';

function App() {
  return (
    <>
     <div className="app-main">
     <div className="container-fluid">
      <div className="container">
      <div className="app-content">
        <Header />
        <Home />
        <Footer />
      </div>
      </div>
     </div>
     </div>
    </>
  );
}

export default App;
