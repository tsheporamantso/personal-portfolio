import React from 'react';
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
import './index.css';

const App = () => (
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
    <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
  </>
);

export default App;
