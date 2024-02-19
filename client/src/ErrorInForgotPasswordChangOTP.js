import React from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate



function ErrorInForgotPasswordChangOTP() {
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
    <div>OTP is wrong</div>
    

    <div className="submit_last" onClick={() => navigate('/emailSendInForgotPasswordPage')} style={{ backgroundColor: 'red'  }}>Close</div>


        
    </div>
      
    </div>
  )
}

export default ErrorInForgotPasswordChangOTP
