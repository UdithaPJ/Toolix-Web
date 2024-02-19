//import React from 'react'
import React, { useState }  from 'react'
import './LoginSignup.css'
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import home_icon from './home_image.png'
import axios from 'axios'
//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate

function ForgotUsername() {
    const navigate = useNavigate();
    const [email,setEmail]=useState('')

    const handleInputChangeEmail=(event)=>{
        setEmail(event.target.value);
    }

    let serveReply = false;

    async function NextPage1(err) {
        err.preventDefault();
        try {
            //console.log({name, password});
            await axios.post("http://localhost:3000/forgotusername", {
                email
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
        const serveReply=true;
        if(email===""||serveReply!==true)
        {
            navigate('/errorForgotUserName')
        }
        else{
            navigate('/emailSendInForgotUserNamePage')
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
                Recover Username
            </div>
            
            <div className='inputs'>

                <div className='input'>
                    <img className='icon' src={email_icon} alt='email icon'></img>
                    <input type='email' placeholder='Email ID' onChange={handleInputChangeEmail}></input>
                </div>
   
            </div>

            <div className='submit_container'>
                <div className="submit_last" onClick={NextPage1}>Send</div>
                
            </div>
    
            
        
        
             

        
            
        
        
             


            
            

        </div>

    </div>
      
    
  )
}

export default ForgotUsername
