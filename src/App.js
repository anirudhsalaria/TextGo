import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not

  //function invoking when we use toggle button
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundImage=`url(${process.env.PUBLIC_URL+ "https://wallpapercave.com/wp/wp2533041.jpg"})`;
    }
    else{
      setMode('light');
      document.body.style.backgroundImage=`url(${process.env.PUBLIC_URL+ "https://i0.wp.com/www.storylogicmedia.com/wp-content/uploads/2013/08/paperbackground.jpg?fit=1010%2C758&ssl=1"})`;
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
