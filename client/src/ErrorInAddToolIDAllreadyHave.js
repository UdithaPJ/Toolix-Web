import React, { useState } from 'react'
import './LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate


function ErrorInAddToolIDAllreadyHave() {
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
        Error in Add Tool.
    </div>
    <div>Tool ID allready in database.</div>

    <div className="submit_last" onClick={() => navigate('/adminPage')} style={{ backgroundColor: 'red'  }}>Close</div>


        
    </div>
      
      
    </div>
  )
}

export default ErrorInAddToolIDAllreadyHave
