import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';


function App() {
  return (
    <>
      <Navbar title="TextGo" about="About us" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
