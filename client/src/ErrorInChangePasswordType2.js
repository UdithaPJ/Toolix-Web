import React, { useState }  from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate



function ErrorInChangePasswordType2() {
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
        Error in password change.
    </div>
    <div>New Password!= Retype New Password or Field empty.</div>

    <div className="submit_last" onClick={() => navigate('/changepassword')} style={{ backgroundColor: 'red'  }}>Close</div>


        
    </div>
   
      
    </div>
  )
}

export default ErrorInChangePasswordType2
