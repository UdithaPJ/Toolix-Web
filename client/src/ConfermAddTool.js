import React, { useState }  from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate


function ConfermAddTool() {
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
        Confirm Add Tool.
    </div>
    <div>New tool data</div>
    <div className="submit_last" onClick={() => navigate('/addToolSuccessful')} >Confirm</div>
    <div className="submit_last" onClick={() => navigate('/adminPage')} style={{ backgroundColor: 'red'  }}>Delete</div>


        
    </div>
      
    </div>
  )
}

export default ConfermAddTool
