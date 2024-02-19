//import React from 'react'
import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate
import './LoginSignup.css'

function EmailSendInForgotUserNamePage() {
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
        Email is Sent for recoverusername.
    </div>

    <div className="submit_last" onClick={() => navigate('/login')}>ok</div>


        
    </div>
      
    </div>
  )
}

export default EmailSendInForgotUserNamePage
