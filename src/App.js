import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

//define usestate for darkmode
const [mode,setMode] = useState('light');
const [alert,setAlert] = useState('null');
const [text,setText] = useState('Enable dark mode');

//Enable Dark Mode function
  const toggleMode = () =>{
  if (mode  === 'dark'){
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert(": Light mode enabled","success")
    setText('Enable dark mode')
  }else{
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert(": Dark mode enabled","success")
    setText('Disable dark mode')
  }
}

//Show Alert function
const showAlert = (message,type) =>{
  setAlert({msg: message, msgType: type})
  //timeout 
  setTimeout(()=>{
    setAlert('null');
  },1500);
}

  return (
    <div className="App">
      <Router>
        <Navbar title = 'Text Utils' theme = {mode} text={text} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
              <Route index element={<TextForm heading = "Enter the text" theme={mode} alert={showAlert}/>}/>
              <Route exact path="/about" element={<About theme={mode}/>}/>  {/* exact = complete matching */}
            </Routes>
        </div>
      </Router>
         
        {/* Passing props */}
        {/* <Navbar title = 'Text Utils' theme = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}></Alert>
        <div className="container">
          <TextForm heading = "Enter the text" theme={mode} alert={showAlert}/>
        </div> */}
        {/* <About></About> */}
     
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
