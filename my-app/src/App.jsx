import logo from './logo.svg';
import React from 'react';
import Home from './pages/Home';
import Officer from './pages/Officer';
import Layout from './components/Layout';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/officers" element={<Officer/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
