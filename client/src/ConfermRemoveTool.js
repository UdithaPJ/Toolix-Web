import React, { useState }  from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate


function ConfermRemoveTool() {
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
        Confirm Remove Tool.
    </div>
    <div>Delete tool data</div>
    <div className="submit_last" onClick={() => navigate('/removeToolSuccessful')} style={{ backgroundColor: 'red'  }} >Remove</div>
    <div className="submit_last" onClick={() => navigate('/adminPage')} >Back</div>


        
    </div>
      
      
    </div>
  )
}

export default ConfermRemoveTool
