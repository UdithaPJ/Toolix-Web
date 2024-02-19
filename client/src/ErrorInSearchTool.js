import React from 'react'
import './LoginSignup.css'

//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate


function ErrorInSearchTool() {
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
        Error In Tool Search
    </div>
    <div>Tool field is empty.</div>

    <div className="submit_last" onClick={NextPage} style={{ backgroundColor: 'red'  }}>Close</div>


        
    </div>
      
      
    </div>
  )
}

export default ErrorInSearchTool
