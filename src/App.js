/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import About from './Components/about/About';
import Experience from './Components/experience/Experience';
import Services from './Components/services/Services';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Articles from './Components/articles/Articles';
import Login from './Components/login/login';
import Dashboard from './Components/dashboard/dashboard';
import TipJar from './Components/TipJar/TipJar';
import './index.css';

// Protects /dashboard — redirects to /login if no token
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

const PortfolioPage = () => (
  <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Articles />
    <Contact />
    <Footer />
  </>
);

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tip" element={<TipJar />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
    <ToastContainer position="bottom-left" autoClose={3000} theme="colored" />
  </>
);

export default App;
