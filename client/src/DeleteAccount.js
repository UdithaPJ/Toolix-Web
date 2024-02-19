import React, { useState } from 'react'


import './LoginSignup.css'
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import home_icon from './home_image.png'
import axios from 'axios'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; 

import { Username } from './LoginSignup.js';

function DeleteAccount() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    const NextPageIcon=()=>{
        
        //need to cange according to user type
    const IsInstructor=true;
    const IsAdmin=false;
    const IsStudent=false; 
    
        if(IsInstructor===true)
        {
            navigate('/instructerPage');
        }
        else if(IsStudent===true)
        {
            navigate('/userpage');
        }
        else if(IsAdmin===true){
            navigate('/adminPage');
        }
    }

    const handleInputChangePassword=(event)=>{
        setPassword(event.target.value);
    }

    const username = Username;
    let serveReply = false;

    async function NextPage1(err) {
        err.preventDefault();
        try {
            //console.log({name, password});
            await axios.delete("http://localhost:3000/deleteAccount", {
                username,
                password
            })
            .then(res => {
                if(res.data.status === 'deleted') {
                    serveReply = true;//Is User Name In the Server
                    NextPage();
                } else if(res.data.status === 'not deleted') {
                    alert(res.data.msg);
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
        //const serveReply=true;//cheack password is correct
        const handOverAllTools=true;//check all tools are handover to workshop.
        if(password===""||serveReply!==true)//pasword is wrong
        {
            navigate('/deleteAccountErrorType2'); 
        }
        else if(handOverAllTools!==true)//need to tool handover to workshop
        {
            navigate('/deleteAccountErrorType1'); 
        }
        else{
            navigate('/deleteAccountSuccessful');
        }//account delet

    }

  return (
    <div>
        <div >
    <ul>
        
    <li className='hi'>
    <div onClick={NextPageIcon}>
            <img className='home_image' src={user_icon} alt='user icon'></img>
        </div> 
                        
                    </li>
        
    
    </ul>
    </div>
    
        <div className='container'>
            <div className='text_hedder'>
                Delete Account
            </div>
            <div className='inputs'>

<div className='input'>
<img className='icon' src={password_icon} alt='password icon'></img>
    <input type='password' placeholder='Password' onChange={handleInputChangePassword}></input>
</div>




</div>
           
   
            

           



            <div className='submit_container'>
                
                <div className="submit_last" onClick={NextPage1} style={{ backgroundColor: 'red'  }}>Delete Account</div>
                
            </div>
        </div>
      
      
    </div>
  )
}

export default DeleteAccount
