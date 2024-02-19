import React, { useState }  from 'react'
import './LoginSignup.css'
import axios from 'axios'
import ToolID from './ToolCheckIn.js'
//import { Link } from 'react-router-dom'; // import Link
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate



function ConfermToolCheackIn() {

  // async function NextPage1(err) {
  //       err.preventDefault();
  //       try {

  //           console.log(ToolID);
  //           //console.log({name, password});
  //           await axios.post("http://localhost:3000/confirmToolCheckIn", {
  //             ToolID
  //           })
  //           .then(res => {
  //               if(res.data.status === 'exist - in use') {
  //                 navigate('/cheackInToolSuccessful');
  //               } else {
  //                   alert('Error occured');
  //               }
  //           })
  //           .catch(e => {
  //               alert('Something went wrong');
  //           })
  //       } catch (err) {
  //           console.error('Error:', err);
  //       }
  //   }

    const navigate = useNavigate();
  return (
    <div>
        <div>
        <br></br>
        <br></br>
        <br></br>
    </div>


<div className='container'>
    <div className='text_hedder'>
        Confirm Tool cheack In.
    </div>
    <div>tool get from student</div>
    <div className="submit_last" onClick={() => navigate('/cheackInToolSuccessful')}  >Confirm</div> //ConfirmCheckIn
    <div className="submit_last" onClick={() => navigate('/toolCheackIn')}style={{ backgroundColor: 'red'  }} >Back</div>


        
    </div>
      
      
    </div>
  )
}

export default ConfermToolCheackIn
