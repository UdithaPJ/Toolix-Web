import React from 'react'
import'./First.css'
import { Link } from 'react-router-dom'; // import Link

const First = () => {
  return (
    <div >
        <div className='nav'>
        <ul className='nav-list'>
        <li className='login-link'> </li>
            <li><Link to="/login" className='login-link'>Login/SignUp</Link> </li>
            
        
        </ul>
        </div>
        <div>
            <div >
            <h1 className='top1'>
            <font color="black">T</font>
            <font color="black">o</font>
            <font color="black">o</font>
            <font color="black">l</font>
            <font color="#FFD523">i</font>
            <font color="#FFD523">x</font>
            <p className='topP'>
                A web app to control manufacturing tools of the university.
            </p>
            </h1>
            
            </div>
            <div className='cantainer'>
                <div className='box'>
                    User Authentication and Authentication
                </div>

                <div className='box'>
                    Tool Inventory Management
                </div>
                <div className='box'>
                    Tool Tracking
                </div>
                <div className='box'>
                    Notification and Alerts
                </div>

            </div>

        </div>
        
    
    
    </div>

  )
}

export default First
