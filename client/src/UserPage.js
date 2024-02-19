import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from './person.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IsInstructor, IsAdmin, IsStudent } from './LoginSignup.js';
let ToolName;
let toolList;
let IsToolAvailable;

function UserPage() {
    const navigate = useNavigate(); // Move this line to the top of the component

    const [toolname, setToolName] = useState('');
    const handleInputChangeToolName = (event) => {
        setToolName(event.target.value);
    };

    async function NextPage1(err) {
        err.preventDefault();
        try {
            await axios.get("http://localhost:3000/allToolList")
            .then(res => {
                if (res.data.status === 'exist') {
                    toolList = res.data.toolList;
                    console.log(toolList);
                    // NextPage();
                } else if (res.data.status === 'not exist') {
                    alert('Tools do not exist');
                }
            })
            .catch(e => {
                alert('Error occurred');
            })
        } catch (err) {
            console.error('Error:', err);
        }
    }

    async function searchTool(err) {
        err.preventDefault();
        try {
            await axios.post("http://localhost:3000/toolDetails", {
                toolname
            })
            .then(res => {
                if (res.data.status === 'exist') {
                    ToolName = toolname;
                    const tool = res.data.tool;
                    console.log(tool);
                    IsToolAvailable = true;
                    NextPage();
                } else if (res.data.status === 'not exist') {
                    alert('Tool does not exist');
                }
            })
            .catch(e => {
                alert('Error occurred');
            })
        } catch (err) {
            console.error('Error:', err);
        }
    }

    const NextPage = () => {
        if (toolname === "") {
            navigate('/errorInSearchTool');
        } else if (IsToolAvailable === true) {
            navigate('/toolIsAvailable'); 
        } else {
            navigate('/toolIsNotAvailable');
        }
    };

    const fetchData = async (endpoint) => {
        try {
            const response = await fetch(endpoint);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [data, setData] = useState(null);

    return (
        <div>
            <div className='nav'>
                <ul className='nav-list'>
                    <li><Link to="/changepassword" className='login-link'>ChangePassword</Link></li>
                    <li className='login-link' style={{ position: 'absolute', left: '150px' }}>
                        <Link to="/deleteAccount" className='login-link'>Delete Account</Link>
                    </li>
                    <li><Link to="/login" className='login-link'>LogOut</Link></li>
                </ul>
            </div>

            <div className='container'>
                <div className='text_hedder'>
                    Search Tool 
                    <div className='inputs'>
                        <div className='input'>
                            <img className='icon' src={user_icon} alt='user icon'></img>
                            <input type='text' placeholder='Tool Name' onChange={handleInputChangeToolName}></input>
                        </div>
                    </div>
                </div>
                <div className="submit_last" onClick={searchTool}>Search</div>
            </div>

            <br></br>

            <div className='container'>
                <div className='text_hedder'>My Tools</div>
                <div>get user tool list using database</div>
            </div>

            <br></br>

            <div className='container'>
                <div className='text_hedder'>
                    View Tool List 
                    <div className="submit_last" onClick={() => NextPage1()}>View Tool</div>
                </div>
            </div>

            <div className='container'>
                {data && (
                    <div>
                        {/* Logic to render fetched data */}
                    </div>
                )}
            </div>
        </div>
    );
}

export { ToolName, toolList };
export default UserPage;
