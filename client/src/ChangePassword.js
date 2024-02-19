import { UserStatusContext } from './LoginSignup';
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
//import { Email } from './LoginSignup.js';


function ChangePassword() {
    const navigate = useNavigate();
    const [oldpassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');


    const handleInputChangeOldPassword=(event)=>{
        setOldPassword(event.target.value);
    }
    const handleInputChangePassword=(event)=>{
        setPassword(event.target.value);
    }

    const handleInputChangeRetypePassword=(event)=>{
        setRetypePassword(event.target.value);
    }

    const username = Username;
    let serveReply=false;

    async function NextPage1(err) {
        err.preventDefault();
        try {
            //console.log({name, password});
            await axios.put("http://localhost:3000/changepassword", {
                username,
                oldpassword,
                password
            })
            .then(res => {
                if(res.data.status === 'updated') {
                    serveReply = true;//Is User Name In the Server
                    NextPage();
                } else if(res.data.status === 'not updated') {
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
        //const serveReply=true;
        if(serveReply!==true||oldpassword==="")
        {
            navigate('/errorInChangePasswordType1');
        }
        else if(password===""||retypePassword===""||password!==retypePassword)
        {
            navigate('/errorInChangePasswordType2');
        }
        else if(oldpassword===password)
        {
            navigate('/errorInChangePasswordType3');
        }
        else
        {
            navigate('/passwordChangeSuccessful');
        }
    }

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
                Change Password 
                
            </div>
            <div className='inputs'>
            
            
            <div className='input'>
<img className='icon' src={password_icon} alt='password icon'></img>
    <input type='password' placeholder='Old Password' onChange={handleInputChangeOldPassword}></input>
</div>


<div className='input'>
<img className='icon' src={password_icon} alt='password icon'></img>
    <input type='password' placeholder='New Password' onChange={handleInputChangePassword}></input>
</div>

<div className='input'>
<img className='icon' src={password_icon} alt='password icon'></img>
    <input type='password' placeholder='Retype New Password' onChange={handleInputChangeRetypePassword}></input>
</div>


</div>
           
   
            

           



            <div className='submit_container'>
                
                <div className="submit_last" onClick={NextPage1}>Set Password</div>
                
            </div>
        </div>
      
    </div>
  )
}

export default ChangePassword
