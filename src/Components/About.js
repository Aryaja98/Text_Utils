import React from 'react'

export default function About(props) {

    return (
        <div className = 'container ' >

            <h1 className ='my-2' style = {{backgroundColor: props.theme=== 'light' ?'white':'grey', color: props.theme === 'dark'?'white':'black'}}>ABOUT US</h1> 

        {/*------------------Accordian------------------- */} 
            <div className=" accordion" id="accordionExample" >
                <div className="accordion-item" style = {{backgroundColor: props.theme=== 'light' ?'white':'grey', color: props.theme === 'dark'?'white':'black'}}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style = {{backgroundColor: props.theme=== 'light' ?'lightgray':'#042743', color: props.theme === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style = {{backgroundColor: props.theme=== 'light' ?'white':'grey', color: props.theme === 'dark'?'white':'black'}}>
                    <h2 className="accordion-header" id="headingTwo" style = {{backgroundColor: props.theme=== 'light' ?'white':'grey', color: props.theme === 'dark'?'white':'black'}}>
                    <button className="accordion-button collapsed" style = {{backgroundColor: props.theme=== 'light' ?'lightgray':'#042743', color: props.theme === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample " >
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style = {{backgroundColor: props.theme=== 'light' ?'white':'grey', color: props.theme === 'dark'?'white':'black'}}>
                    <h2 className="accordion-header" id="headingThree" >
                    <button className="accordion-button collapsed" style = {{backgroundColor: props.theme=== 'light' ?'lightgray':'#042743', color: props.theme === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            {/*------------------Button to enable dark mode------------------- */}
            {/* <div className='container my-3' >
                <button type='button' className='btn btn-primary float-start gap-3' onClick = {changeTheme}>{text}</button>
            </div> */}
        </div>
        
    )
    }
