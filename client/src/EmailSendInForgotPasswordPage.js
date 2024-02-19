import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate
import './LoginSignup.css'

function EmailSendInForgotPasswordPage() {
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
        Email(OTP) is Sent for recover Password.
    </div>

    <div className="submit_last" onClick={() => navigate('/ForgotPasswordChange')}>ok</div>


        
    </div>
      
      
    </div>
  )
}

export default EmailSendInForgotPasswordPage
