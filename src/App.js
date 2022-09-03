import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';

function App() {

//define usestate for darkmode
const [mode,setMode] = useState('light');

const toggleMode = () =>{
  if (mode === 'dark'){
    setMode('light')
  }else{
    setMode('dark')
  }
}

  return (
    <div className="App">
      
      {/* Passing props */}
      <Navbar title = 'Text Utils' theme = {mode} toggleMode = {toggleMode}/>

      <div className="container">
        <TextForm heading = "Enter the text"/>
      </div>

      <About></About>
         
    </div>
  );
}


//----------------------------*------------------------------------------
//set default props to pass to component Navbar if no value is assigned
Navbar.defaultProps = {
  title : 'Set title here',
  about : 'About us'
}

//set prop types and condition
Navbar.propTypes = {
 title : PropTypes.string.isRequired
}
//----------------------------*------------------------------------------

export default App;
