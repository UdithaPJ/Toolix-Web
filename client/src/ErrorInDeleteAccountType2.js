import React from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate

function ErrorInDeleteAccountType2() {
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
        Error in Delete Account.
    </div>
    <div>Enter the correct password</div>

    <div className="submit_last" onClick={() => navigate('/deleteAccount')} style={{ backgroundColor: 'red'  }}>Close</div>


        
    </div>
      
    </div>
  )
}

export default ErrorInDeleteAccountType2
