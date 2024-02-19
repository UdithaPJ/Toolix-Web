import { UserStatusContext } from './LoginSignup';
import React, { useState } from 'react'


import './LoginSignup.css'
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import home_icon from './home_image.png'


//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; 



function ToolTraking() {
    const navigate = useNavigate();
    const [ToolID, setToolID] = useState('');
    

    const handleInputChangeToolID=(event)=>{
        setToolID(event.target.value);
    }
    

    const NextPage=()=>{
        //server request
        const IsToolIDISCorrect=true;
        if(ToolID===""||IsToolIDISCorrect===false)
        {
            //error tooi ID field empty or tool id is wrong
            navigate('/errorInToolTracking');
        }
        else{
            //view tool details
            navigate('/trackToolDetails');

        }

        
    }
    const NextPageIcon=()=>{
        
      
    
    
        navigate('/instructerPage');
    
    
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
                Track Tool   
            </div>
            <div className='inputs'>
            
            
            <div className='input'>
<img className='icon' src={password_icon} alt='password icon'></img>
    <input type='text' placeholder='Tool ID' onChange={handleInputChangeToolID}></input>
</div>





</div>
            <div className='submit_container'>
                
                <div className="submit_last" onClick={NextPage}>Track</div>
                
            </div>
        </div>
      
    </div>
  )
}

export default ToolTraking
