import React from 'react';
import './assets/css/App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Reports from './components/Reports';
import LoginSignUp from './components/Login_SignUp';
import EventPage from './components/EventPage';


function App() {
  return (
    <div>
    
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/event' element={<EventPage />} />
          <Route path='/LogOut' element={<Home />} />
        </Routes>

    </div>
  );
}

export default App;
