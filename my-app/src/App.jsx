import logo from './logo.svg';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/about" element={<About/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
