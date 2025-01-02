import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage/home.component.jsx';
import Shop from './pages/shop/shop.component.jsx';
import "./App.css"
import Header from './component/header/header.component.jsx';
function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Shop" element={<Shop />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
