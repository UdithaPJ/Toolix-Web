import { UserStatusContext } from './LoginSignup';
import React, { useState } from 'react'
import axios from 'axios'

import './LoginSignup.css'
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import home_icon from './home_image.png'


//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; 

//let ToolId;
let IsToolIDISCorrect = false;
let IsToolInInsideWorkshop = true;

function ToolCheckIn() {
    const navigate = useNavigate();
    const [id, setToolID] = useState('');
    //server request

    const handleInputChangeToolID=(event)=>{
        setToolID(event.target.value);
    }

    async function NextPage1(err) {
        err.preventDefault();
        try {
            //console.log({name, password});
            await axios.post("http://localhost:3000/toolCheckIn", null, {
                params: {id: id}
            })
            .then(res => {
                if(res.data.status === 'exist - in use') {
                    IsToolInInsideWorkshop=false;
                    IsToolIDISCorrect=true;
                    //ToolId = ToolID;
                    //console.log(ToolId);
                    NextPage();
                } else {
                    alert('Error occured');
                }
            })
            .catch(e => {
                alert('Something went wrong');
            })
        } catch (err) {
            console.error('Error:', err);
        }
    }

    const NextPage=()=>{
        //server request
        // const IsToolInInsideWorkshop=false;
        // const IsToolIDISCorrect=true;
        if(id===""||IsToolIDISCorrect===false)
        {
            //error tooi ID field empty or tool id is wrong
            navigate('/errorInToolCheackingType2');
        }

        else if(IsToolInInsideWorkshop===true)
        {
            //error tool inside the workshop
            navigate('/errorInToolCheackingType1');
        }
        else{
            //conferm massage
            navigate('/ConfermToolCheacking');

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
                Tool Check In   
            </div>
            <div className='inputs'>
            
            
            <div className='input'>
<img className='icon' src={password_icon} alt='password icon'></img>
    <input type='text' placeholder='Tool ID' onChange={handleInputChangeToolID}></input>
</div>





</div>
            <div className='submit_container'>
                
                <div className="submit_last" onClick={NextPage1}>Check In</div>
                
            </div>
        </div>
      
    </div>
  )
}

//export {ToolID};
export default ToolCheckIn
