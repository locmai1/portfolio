import React from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Contact from './sections/Contact';
import Tabs from './sections/Tabs';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="font-poppins max-w-[900px] h-[2300px] md:h-[1500px] mx-auto px-5 mb-20">
      <Header />
      <Contact />
      <About />
      <Tabs />
    </div>
  );
}

export default App;
