import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Home from './components/Home/Home.jsx';
import Conatct from './components/Contact/Contact.jsx';
import Signup from './components/Signup/Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Conatct />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
