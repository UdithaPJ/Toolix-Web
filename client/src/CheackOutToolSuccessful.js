import React, { useState }  from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate



function CheackOutToolSuccessful() {
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
        Successful Check Out Tool.
    </div>
    
    
    <div className="submit_last" onClick={() => navigate('/instructerPage')} >Ok</div>


        
    </div>
      
    </div>
  )
}

export default CheackOutToolSuccessful
