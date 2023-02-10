import React from 'react';
import Callout from './components/Callout';
import Header from './components/Header';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App font-poppins max-w-[900px] h-full mx-auto px-5">
      <Header icon='icons/1.png' title='Loc Mai' />
      <Callout icon='⚠️' label='alert'
        status={"seeking front-end & software engineering internships for summer 2023!"}
      />
    </div>
  );
}

export default App;
