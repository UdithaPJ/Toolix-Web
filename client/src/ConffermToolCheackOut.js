import React, { useState }  from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate


function ConffermToolCheackOut() {
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
        Confirm Tool check Out.
    </div>
    <div>tool give to student</div>
    <div className="submit_last" onClick={() => navigate('/cheackOutToolSuccessful')}  >Confirm</div>
    <div className="submit_last" onClick={() => navigate('/toolCheackOut')}style={{ backgroundColor: 'red'  }} >Back</div>


        
    </div>
      
    </div>
  )
}

export default ConffermToolCheackOut
