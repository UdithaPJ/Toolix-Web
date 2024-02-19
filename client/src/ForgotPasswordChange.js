import React, { useState }  from 'react'
import './LoginSignup.css'
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import home_icon from './home_image.png'
import axios from 'axios'
//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; 

function ForgotPasswordChange() {
    const navigate = useNavigate();

    
    const [password, setPassword] = useState('');
    const [OTP,setotp]=useState('')
    const [retypePassword, setRetypePassword] = useState('');

    const handleInputChangePassword=(event)=>{
        setPassword(event.target.value);
    }

    const handleInputChangeRetypePassword=(event)=>{
        setRetypePassword(event.target.value);
    }

    const handleInputChangeOTP=(event)=>{
        setotp(event.target.value);
    }


    // async function NextPage1(err) {
    //     err.preventDefault();
    //     try {
    //         //console.log({name, password});
    //         await axios.post("http://localhost:3000/forgotpassword", {
    //             username
    //         })
    //         .then(res => {
    //                 if(res.data.status === 'exist') {
    //                     serveReply = true;//Is User Name In the Server
    //                 NextPage();
    //             } else if (res.data.status === 'not exist') {
    //                 alert('User does not exist');
    //             }
    //         })
    //         .catch(e => {
    //             alert('wrong details')
    //         })
    //     } catch (err) {
    //         console.error('Error:', err);
    //     }
    // }

    const NextPage=()=>{
        //server request
    const serveReply=true;
    if(OTP===""||serveReply!==true)
    {
        navigate('/errorInForgotPasswordChangeOTP')
    }
    else if(password===""||retypePassword===""||retypePassword!==password)
    {
        navigate('/errorForgotPasswordChange');
    }
    else{
        navigate('/passwordChangeSuccessful');
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
                Change password 
            </div>
            <div className='inputs'>

            



 <div className='input'>
<img className='icon' src={email_icon} alt='email icon'></img>
    <input type='email' placeholder='OTP '  onChange={handleInputChangeOTP}></input>
</div>





<div className='input'>
<img className='icon' src={password_icon} alt='password icon'></img>
    <input type='password' placeholder='Password' onChange={handleInputChangePassword}></input>
</div>

<div className='input'>
<img className='icon' src={password_icon} alt='password icon'></img>
    <input type='password' placeholder='Retype Password' onChange={handleInputChangeRetypePassword}></input>
</div>


</div>
           
   
            

           



            <div className='submit_container'>
                
                <div className="submit_last" onClick={NextPage}>Set Password</div>
                
            </div>
        </div>
      
    </div>
  )
}

export default ForgotPasswordChange
