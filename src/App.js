// App.js
import React from 'react';

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';
import NavBar from "./NavBar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
{/* 
        <NavBar /> */}

        <Routes>

          <Route path="/" element={<VendingMachine />} />

          <Route path="/chips" element={<Chips />} />

          <Route path="/soda" element={<Soda />} />
          
          <Route path="/candy" element={<Candy />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
