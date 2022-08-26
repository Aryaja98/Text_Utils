import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

  //define the function - handleUpClick here
  const handleUpClick = () => {
    console.log("Upper case click!")
    setText(text.toUpperCase())
  }

  //define the function - handleLoClick here
  const handleLoClick = () => {
    console.log("Lower case click!")
    setText(text.toLowerCase())
  }

   //define the function - handleLoClick here
   const handleCleClick = () => {
    console.log("Clear text!")
    setText('')
  }

  const handleOnChange = (event) => {
    console.log('Say Hi!')
    setText(event.target.value)
  }

// create a variable text and set value 'Enter a text'
const [text, setText] = useState('Enter your text here......');

  return (
    <>
    <div className='container border' >
            <h1>{props.heading}</h1>

            <div className="mb-3 ">
            {/*<label for="myBox" className="form-label">Example textarea</label>*/}
                <textarea className="form-control" id="myBox" value = {text} rows="8" onChange={handleOnChange} ></textarea>
            </div>

            <button type="button" className="btn btn-success mx-2 " onClick={handleUpClick} >Convert to upper case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
            <button type="button" className="btn btn-danger mx-2" onClick={handleCleClick}>Clear Text</button>
    
    </div>

    <div className='container my-3'>
      <h3> Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length }Minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
