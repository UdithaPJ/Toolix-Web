import React, { useState }  from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate



function ErrorInForgotPasswordChange() {
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
        Error in Forgot password change.
    </div>
    <div>password!=retypePassword</div>

    <div className="submit_last" onClick={() => navigate('/forgotpasswordchange')} style={{ backgroundColor: 'red'  }}>Close</div>


        
    </div>
   

</div>
    
  )
}

export default ErrorInForgotPasswordChange
