import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div className="App">
      
      {/* Passing props */}
      <Navbar title = 'Text Utils'/>

      <div className="container">
        <TextForm heading = "Enter the text"/>
      </div>
         
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
