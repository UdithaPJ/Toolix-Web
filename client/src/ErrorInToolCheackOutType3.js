import React, { useState }  from 'react'
import './LoginSignup.css'
//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate


function ErrorInToolCheackOutType3() {
    const navigate = useNavigate();
  return (
    <div>
        <div>
        <br></br>
        <br></br>
        <br></br>
    </div>


<div className='container'>
    <div className='text_hedder'>
        Error in ToolCheck Out.
    </div>
    <div>Tool Id wrong or field empty.</div>

    <div className="submit_last" onClick={() => navigate('/toolCheackOut')} style={{ backgroundColor: 'red'  }}>Close</div>


        
    </div>
      
      
    </div>
  )
}

export default ErrorInToolCheackOutType3
