import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';
import home_icon from './home_image.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IsInstructor, IsAdmin, IsStudent } from './LoginSignup.js';

let IsIDaAllreadyHave = true;
let IsRemoveIDInData = false;

function AdminPage() {
    const navigate = useNavigate(); // Move this line to the top of the component

    const handleLogout = () => {
        // Reset user type variables
        IsInstructor = false;
        IsAdmin = false;
        IsStudent = false;

        // Redirect to login page
        navigate('/login');
    };

    const [name, setToolName] = useState('');
    const handleInputChangeToolName = (event) => {
        setToolName(event.target.value);
    };

    const [id, setToolID] = useState('');
    const handleInputChangeToolID = (event) => {
        setToolID(event.target.value);
    };

    const [removeId, setremoveToolID] = useState('');
    const handleInputChangeremoveToolID = (event) => {
        setremoveToolID(event.target.value);
    };

    const [status, setToolCatogory] = useState('');
    const handleInputChangeToolCatogory = (event) => {
        setToolCatogory(event.target.value);
    };

    const [description, setToolDis] = useState('');
    const handleInputChangeToolDis = (event) => {
        setToolDis(event.target.value);
    };

    async function addTool(err) {
        console.log({name, id, status, description})
        err.preventDefault();
        try {
            await axios.post("http://localhost:3000/addTool", {
                name,
                id,
                status,
                description
            })
            .then(res => {
                if (res.data.status === 'not exist') {
                    IsIDaAllreadyHave = false;
                    NextPage();
                } else if (res.data.status === 'exist') {
                    alert('Tool is already there');
                } else {
                    alert('Error occurred')
                }
            })
            .catch(e => {
                alert('Something went wrong');
            })
        } catch (err) {
            console.error('Error:', err);
        }
    }

    async function removeTool(err) {
        console.log({name, id, status, description})
        err.preventDefault();
        try {
            await axios.delete("http://localhost:3000/removeTool", {
                params: { removeId }
            })
            .then(res => {
                if (res.data.status === 'deleted') {
                    IsRemoveIDInData = true;
                    NextPageRemove();
                } else if (res.data.status === 'not deleted') {
                    alert(res.data.status.msg);
                } else {
                    alert('Error occurred')
                }
            })
            .catch(e => {
                alert('Something went wrong');
            })
        } catch (err) {
            console.error('Error:', err);
        }
    }

    const NextPage = () => {
        if (IsIDaAllreadyHave === true) {
            navigate('/errorInAddToolIDAllreadyHave'); 
        } else if (name === "" || id === "" || status === "" || description === "") {
            navigate('/errorInAddToolFieldEmpty');
        } else {
            navigate('/confermAddTool');
        }
    }

    const NextPageRemove = () => {
        if (removeId === "") {
            navigate('/errorInRemoveToolFliedEmpty');
        } else if (IsRemoveIDInData === false) {
            navigate('/errorInRemoveToolToolInDatabase'); 
        } else {
            navigate('/confermRemoveTool');
        }
    }

    return (
        <div>
            <div className='nav'>
                <ul className='nav-list'>
                    <li><Link to="/changepassword" className='login-link'>ChangePassword</Link></li>
                    <li><Link to="/login" className='login-link' onClick={handleLogout}>LogOut</Link></li>
                </ul>
            </div>

            <div className='container'>
                <div className='text_hedder'>
                    Add tool
                    <div className='inputs'>
                        <div className='input'>
                            <img className='icon' src={user_icon} alt='user icon'></img>
                            <input type='text' placeholder='Tool Name' onChange={handleInputChangeToolName}></input>
                        </div>

                        <div className='input'>
                            <img className='icon' src={user_icon} alt='user icon'></img>
                            <input type='text' placeholder='Tool ID' onChange={handleInputChangeToolID}></input>
                        </div>
                        <div className='input'>
                            <img className='icon' src={user_icon} alt='user icon'></img>
                            <input type='text' placeholder='Tool Status' onChange={handleInputChangeToolCatogory}></input>
                        </div>
                        <div className='input'>
                            <img className='icon' src={user_icon} alt='user icon'></img>
                            <input type='text' placeholder='Tool Description' onChange={handleInputChangeToolDis}></input>
                        </div>
                    </div>
                </div>
                <div className="submit_last" onClick={addTool}>Add Tool</div>
            </div>
            <br></br>
            <div className='container'>
                <div className='text_hedder'>
                    Remove tool
                    <div className='inputs'>
                        <div className='input'>
                            <img className='icon' src={user_icon} alt='user icon'></img>
                            <input type='text' placeholder='Tool ID' onChange={handleInputChangeremoveToolID}></input>
                        </div>
                    </div>
                </div>
                <div className="submit_last" style={{ backgroundColor: 'red'  }} onClick={removeTool}>Remove Tool</div>
            </div>
        </div>
    )
}

export default AdminPage;
