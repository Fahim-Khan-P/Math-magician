/* eslint-disable react/prefer-stateless-function */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Quote from './Components/Quote';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
