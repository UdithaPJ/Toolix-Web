import React from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate



function DeleteAccountSuccessful() {
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
        Delete Account successful.
    </div>

    <div className="submit_last" onClick={() => navigate('/login')}>Ok</div>


        
    </div>
      
      
    </div>
  )
}

export default DeleteAccountSuccessful
