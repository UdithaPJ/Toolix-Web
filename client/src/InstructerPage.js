import React from 'react';
import './LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import { IsInstructor, IsAdmin, IsStudent } from './LoginSignup.js';

function InstructerPage() {
    const navigate = useNavigate(); // Create a navigate function

    const handleLogout = () => {
        // Reset user type variables
        // Replace these with the actual variables you want to reset
        // For example:
        IsInstructor = false;
        IsAdmin = false;
        IsStudent = false;

        // Redirect to login page
        navigate('/login');
    };

    return (
        <div>
            <div className='nav'>
                <ul className='nav-list'>
                    <li><Link to="/changepassword" className='login-link'>ChangePassword</Link></li>
                    <li className='login-link' style={{ position: 'absolute', left: '150px' }}>
                        <Link to="/deleteAccount" className='login-link'>Delete Account</Link>
                    </li>
                    <li><Link to="/login" className='login-link' onClick={handleLogout}>LogOut</Link></li>
                </ul>
            </div>

            <div className='container'>
                <div className='text_hedder'>Check In Tools</div>
                <div className="submit_last" onClick={() => navigate('/toolCheckIn')}>Check In</div>
            </div>

            <br></br>
            <br></br>

            <div className='container'>
                <div className='text_hedder'>Check Out Tools</div>
                <div className="submit_last" onClick={() => navigate('/toolCheckOut')} style={{ backgroundColor: 'red' }}>Check Out</div>
            </div>

            <br></br>
            <br></br>

            <div className='container'>
                <div className='text_hedder'>Track Tools</div>
                <div className="submit_last" onClick={() => navigate('/toolTracking')}>Track</div>
            </div>
        </div>
    );
}

export default InstructerPage;
