import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import home_icon from './home_image.png'
import axios from 'axios'
//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate
export const UserStatusContext = React.createContext();

let Username;
let Email;
let serveReply=false;//Is User Name In the Server
let IsPasswordCorrect=false;
let IsInstructor=false;
let IsAdmin=false;
let IsStudent=false;

const LoginSignup = () => {
    const navigate = useNavigate();
    const [action,setAction]=useState("Login");

    const [username, setName] = useState(''); 
    const [password, setPassword] = useState('');
    const [email,setEmail]=useState('')
    const [retypePassword, setRetypePassword] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    // Username = username;
    // Email = email;

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };


    const handleInputChangeName = (event) => {
        setName(event.target.value); // Update the state variable when the input changes
    };

    const handleInputChangePassword=(event)=>{
        setPassword(event.target.value);
    }

    const handleInputChangeRetypePassword=(event)=>{
        setRetypePassword(event.target.value);
    }

    const handleInputChangeEmail=(event)=>{
        setEmail(event.target.value);
    }

    async function NextPage1(err) {
        console.log({serveReply, IsPasswordCorrect, IsInstructor, IsAdmin, IsStudent})
        err.preventDefault();
        if(action === 'Login') {
            try {
                //console.log({name, password});
                await axios.post("http://localhost:3000/login", {
                    username,
                    password
                })
                .then(res => {
                        if(res.data.status === 'exist') {
                            Username = username;
                            Email = email;
                            serveReply = true;//Is User Name In the Server
                            IsPasswordCorrect = true;
                            switch(res.data.user.role) {
                                case 'admin':
                                    IsAdmin = true;
                                    console.log(IsAdmin);
                                    break;
                                case 'instructor':
                                    IsInstructor = true;
                                    console.log(IsAdmin);
                                    break;
                                case 'student':
                                    IsStudent = true;
                                    console.log(IsAdmin);
                                    break;
                            }
                        NextPage();
                    } else if (res.data.status === 'not exist') {
                        navigate('/errorNameOrPassword');
                    }
                })
                .catch(e => {
                    alert('wrong details')
                })
            } catch (err) {
                console.error('Error:', err);
            }
        }
        else if(action === 'Sign Up') {
            try {
                console.log({username, email, password, selectedValue});
                await axios.post("http://localhost:3000/sign-in", {
                    username,
                    password,
                    email,
                    selectedValue
                })
                .then(res => {
                        if(res.data.status === 'not exist') {
                            serveReply = true;//Is User Name In the Server
                            IsPasswordCorrect = true;
                            switch(selectedValue) {
                                // case 'admin':
                                //     IsAdmin = true;
                                //     break;
                                case 'instructor':
                                    IsInstructor = true;
                                    break;
                                case 'student':
                                    IsStudent = true;
                                    break;
                            }
                        NextPage();
                    } else if (res.data.status === 'exist') {
                        alert('User already exists');
                        //navigate('/errorNameOrPassword');
                    }
                })
                .catch(e => {
                    alert('Error occured');
                })
            } catch (err) {
                console.error('Error:', err);
            }
        }
    };

    
 const NextPage=()=>{
    // //server request
    // const serveReply=true;//Is User Name In the Server
    // const IsPasswordCorrect=true;
    // const IsInstructor=false;
    // const IsAdmin=false;
    // const IsStudent=false;
    // //server request
    if(action==="Login" && (username==="" || password===""||serveReply===false||IsPasswordCorrect===false))//server reply
    {
        navigate('/errorNameOrPassword'); 
    }
    else if(action==="Sign Up" && serveReply===false)
    {
        navigate('/userNameAllreadyHaveAccount'); 
    }
    else if(action==="Sign Up" &&(username==="" || password===""||email===""||retypePassword===""||retypePassword!==password||serveReply===false))//server reply
    {
        navigate('/errorNameOrPassword'); 
    }
    
    else
    {
        if(IsInstructor===true||(action==="Sign Up" && selectedValue==="instructor"))
        {
            navigate('/instructerPage')
        }
        else if(IsAdmin===true)
        {
            navigate('/adminPage'); 
        }
        else {
        navigate('/userpage');
        }
    }


    console.log({serveReply, IsPasswordCorrect, IsInstructor, IsAdmin, IsStudent});
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
            
            <div className='submit_container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>(setAction("Sign Up") )}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>(setAction("Login") )}>Log In</div>
            </div>

           

            

            <div className='inputs'>

            

                <div className='input'>
                    <img className='icon' src={user_icon} alt='user icon'></img>
                    <input type='text' placeholder='Name' onChange={handleInputChangeName}></input>
                </div>

                {action==="Login"?<div></div>: <div className='input'>
                <img className='icon' src={email_icon} alt='email icon'></img>
                    <input type='email' placeholder='Email ID' onChange={handleInputChangeEmail}></input>
                </div>}

                

               

                <div className='input'>
                <img className='icon' src={password_icon} alt='password icon'></img>
                    <input type='password' placeholder='Password' onChange={handleInputChangePassword}></input>
                </div>

                {action==="Login"?<div></div>: <div className='input'>
                <img className='icon' src={password_icon} alt='password icon'></img>
                    <input type='password' placeholder='Retype Password'onChange={handleInputChangeRetypePassword}></input>
                </div>}

                {action==="Login"?<div></div>:<div className='input'>
                <select className='input_selection'  value={selectedValue} onChange={handleChange}>
                    <option className='op_text' value="student">Student</option>
                    <option className='op_text' value="instructor">Instructor</option>
                    
                </select>

            </div>}
            </div>
            {action==="Sign Up"?<div/>:
            <div className='forgot'><Link to="/forgotpassword">Forgot Password? Click here</Link></div>
        
        
             }

            {action==="Sign Up"?<div/>:
            <div className='forgot'><Link to="/forgotusername">Forgot Username? Click here</Link></div>
            /*<div className='forgot'>Forgot Username? Clik heare</div>*/
        
        
             }


            
            <div className='submit_container'>
                <div className="submit_last" onClick={NextPage1}>{action}</div>
                
            </div>

        </div>
        </div>
      
    
  )
}


export { Username, Email, serveReply, IsPasswordCorrect, IsInstructor, IsAdmin, IsStudent }
// module.exports = {
//     variable1,
//     variable2
//   };
//const { variable1, variable2 } = require('./file1.js');
export default LoginSignup
