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


let IsToolInInsideWorkshop=true;
let IsToolIDISCorrect=false;
let IsStudentHaveAccount=false;

function ToolCheackOut() {
    const navigate = useNavigate();
    const [ToolID, setToolID] = useState('');
    const [Name, setName] = useState('');


    const handleInputChangeToolID=(event)=>{
        setToolID(event.target.value);
    }

    const handleInputChangeName=(event)=>{
        setName(event.target.value);
    }
    
    async function NextPage1(err) {
        err.preventDefault();
        try {
            //console.log({name, password});
            await axios.post("http://localhost:3000/toolCheckOut", {
                ToolID,
                Name
            })
            .then(res => {
                if(res.data.status === 'tool checked out') {
                    IsToolInInsideWorkshop=false;
                    IsToolIDISCorrect=true;
                    IsStudentHaveAccount=true;
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
        // const IsStudentHaveAccount=true;
        if(ToolID===""||IsToolIDISCorrect===false)
        {
            //error tooi ID field empty or tool id is wrong
            navigate('/errorInToolCheackOutType3')
        }

        else if(IsToolInInsideWorkshop===true)
        {
            //error tool is not inside the workshop
            navigate('/errorInToolCheackOutType1')
            
        }
        else if(Name===""||IsStudentHaveAccount===false)
        {
            //error in name field
            navigate('/errorInToolCheackOutType2')
        }
        else{
            //conferm massage
            navigate('/confermToolCheackOut')
            

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
                Tool Check Out   
            </div>
            <div className='inputs'>
            
            
            <div className='input'>
<img className='icon' src={password_icon} alt='password icon'></img>
    <input type='text' placeholder='Tool ID' onChange={handleInputChangeToolID}></input>
</div>
<div className='input'>
<img className='icon' src={user_icon} alt='password icon'></img>
    <input type='text' placeholder='User Name' onChange={handleInputChangeName}></input>
</div>





</div>
            <div className='submit_container'>
                
                <div className="submit_last" onClick={NextPage1}>Check Out</div>
                
            </div>
        </div>
      
    </div>
  )
}

export default ToolCheackOut
