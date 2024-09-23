import React, { useState } from 'react';
import Header from './components/Header'; // Import the Header component
import './App.css'; // General application styles
import Home from './components/Home';
import PlanMyBudget from './components/PlanMyBudget';
import ServicesSection from './components/ServicesSection';

import Profile from './components/Profile';
import AboutSection from './components/AboutSection';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? (
      <>
        <Header isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} /> 
        {element}
      </>
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <Router>
      <Routes>

      <Route path="/login" element={<Login onLogin={handleLogin} />} /> 
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/planmybudget" element={<PrivateRoute element={<PlanMyBudget />} />} />
        <Route path="/services" element={<PrivateRoute element={<ServicesSection />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />

        <Route path="/about" element={<PrivateRoute element={<AboutSection />} />} />



      
      
   </Routes>
   </Router>
  );
};

export default App;