import React from 'react';
import "./index.css"
import Navbar from './components/Navbar';
import HeroImg from './components/HeroImg';
import AboutContent from './components/AboutContent';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroImg />
      <AboutContent />
      <Form />
      <Footer />
    </>
  );
}
export default App;