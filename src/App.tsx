import React from 'react';
import Link from './components/Link';
import Callout from './components/Callout';
import Header from './components/Header';
import About from './components/About';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="font-poppins max-w-[900px] h-full mx-auto px-5">
      <Header icon='icons/1.png' title='Loc Mai' />
      <Callout icon='⚠️' label='alert' status="seeking front-end & software engineering internships for summer 2023!" />
      <hr className="h-px my-5 bg-[#787774] border-0" />
      <div className='w-full flex flex-row'>
        <Link icon='💼' label='nav-linkedin' to='/' shortcut='LinkedIn' />
        <Link icon='🧑🏻‍💻' label='nav-github' to='/' shortcut='GitHub' />
        <Link icon='📬' label='nav-email' to='/' shortcut='Email' />
        <Link icon='📜' label='nav-resume' to='/' shortcut='Resume' />
      </div>
      <hr className="h-px my-5 bg-[#787774] border-0" />
      <About icon='icons/2.png'/>
    </div>
  );
}

export default App;
