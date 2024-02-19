import React from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate



function ErrorUserNameAllreadyHaveAccount() {
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
            Username Allready Have Account.
        </div>

        <div className="submit_last" onClick={() => navigate('/login')}style={{ backgroundColor: 'red'  }}>Close</div>


            
        </div>
      
    </div>
  )
}

export default ErrorUserNameAllreadyHaveAccount
