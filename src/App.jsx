import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage/home.component.jsx';
import Shop from './pages/shop/shop.component.jsx';
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/Shop" element={<Shop />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
