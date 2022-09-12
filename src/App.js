import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {

//define usestate for darkmode
const [mode,setMode] = useState('light');
const [alert,setAlert] = useState('null');

//Enable Dark Mode function
  const toggleMode = () =>{
  if (mode  === 'dark'){
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert(": Light mode enabled","success")
  }else{
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert(": Dark mode enabled","success")
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
      
      {/* Passing props */}
      <Navbar title = 'Text Utils' theme = {mode} toggleMode = {toggleMode}/>

      <Alert alert={alert}></Alert>

      <div className="container">
        <TextForm heading = "Enter the text" theme={mode} alert={showAlert}/>
      </div>

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
