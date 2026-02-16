import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import BuyItems from './BuyItems';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/buy-items" element={<BuyItems />} />
      </Routes>
    </Router>
  );
}
export default App;
