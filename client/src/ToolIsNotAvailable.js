import React from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate



function ToolIsNotAvailable() {
    const navigate = useNavigate();
    const NextPage=()=>{
        
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
        <div>
        <br></br>
        <br></br>
        <br></br>
    </div>


<div className='container'>
    <div className='text_hedder'>
        Tool Is Not Available.
    </div>

    <div className="submit_last" onClick={NextPage}>Ok</div>


        
    </div>
      
      
    </div>
  )
}

export default ToolIsNotAvailable
