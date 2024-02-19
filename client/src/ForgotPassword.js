//import React from 'react'
import './LoginSignup.css'
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import home_icon from './home_image.png'
import axios from 'axios'
//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate
import React, { useState } from 'react';



function ForgotPassword() {
    const navigate = useNavigate();
    const [username, setName] = useState(''); 
    const [email,setEmail]=useState('')
    

    const handleInputChangeName = (event) => {
        setName(event.target.value); // Update the state variable when the input changes
    };

    const handleInputChangeEmail=(event)=>{
        setEmail(event.target.value);
    }

    let serveReply = false;
    
    async function NextPage1(err) {
        err.preventDefault();
        try {
            //console.log({name, password});
            await axios.post("http://localhost:3000/forgotpassword", {
                username
            })
            .then(res => {
                    if(res.data.status === 'exist') {
                        serveReply = true;//Is User Name In the Server
                    NextPage();
                } else if (res.data.status === 'not exist') {
                    alert('User does not exist');
                }
            })
            .catch(e => {
                alert('wrong details')
            })
        } catch (err) {
            console.error('Error:', err);
        }
    }

    const NextPage=()=>{
        //server request
        //const serveReply=true;
        if( (username==="" || email===""||serveReply===false))//server reply
        {
            navigate('/errorRecoverPassword'); 
        }
        else
        {
            navigate('/emailSendInForgotPasswordPage')
        }
    
    
     }   





    return (
        <div>
            <div >
        <ul>
            
        <li className='hi'>
                            <Link to="/"> {/* Use Link here */}
                                <img className='home_image' src={home_icon} alt='home icon'></img>
                            </Link>
                        </li>
            
        
        </ul>
        </div>
        
            <div className='container'>
                <div className='text_hedder'>
                    Recover Password
                </div>

                <div className='input'>
                    <img className='icon' src={user_icon} alt='user icon'></img>
                    <input type='text' placeholder='Name' onChange={handleInputChangeName}></input>
                </div>
                
                <div className='inputs'>
    
                    <div className='input'>
                        <img className='icon' src={email_icon} alt='email icon'></img>
                        <input type='email' placeholder='Email ID' onChange={handleInputChangeEmail}></input>
                    </div>
       
                </div>
    
                <div className="submit_last" onClick={NextPage1}>Send</div>


                    
                </div>
                <div className='submit_container'>
                    
                    
                </div>
    
            </div>
    
        
          
        
      )
  
}

export default ForgotPassword

