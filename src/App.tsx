import React from 'react';
import Callout from './components/Callout';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App font-poppins max-w-[900px] h-full mx-auto">
      <Callout status={"seeking front-end & software engineering internships for summer 2023!"}
        emoji='⚠️'
        label='alert'
      />
    </div>
  );
}

export default App;
