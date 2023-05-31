import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import Black from './components/black.jpg';
import White from './components/white.jpg';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not

  //function invoking when we use toggle button
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundImage=`url(${Black})`;
    }
    else{
      setMode('light');
      document.body.style.backgroundImage=`url(${White})`;
    }
  }

  return (
    <>
      <Navbar title="TextGo" about="About us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
