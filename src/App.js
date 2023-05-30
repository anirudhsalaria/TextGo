import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('dark');  //whether dark mode is enabled or not
  return (
    <>
      <Navbar title="TextGo" about="About us" mode={mode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
