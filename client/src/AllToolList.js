import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IsInstructor, IsStudent, IsAdmin } from './LoginSignup.js';

let user;

function AllToolList() {
    const navigate = useNavigate();
    const [toolList, setToolList] = useState([]);

    useEffect(() => {
        async function fetchToolList() {
            try {
                const response = await axios.get("http://localhost:3000/allToolList");
                if (response.data.status === 'exist') {
                    setToolList(response.data.toolList);
                } else if (response.data.status === 'not exist') {
                    alert('Tools do not exist');
                }
                user = response.data.user;
                //user = await await User.findOne({username: username});
            } catch (error) {
                console.error('Error:', error);
                alert('Error occurred while fetching tool list');
            }
        }
        fetchToolList();
    }, []);

    const NextPage = () => {
        if (IsInstructor === true) {
            navigate('/instructerPage');
        } else if (IsStudent === true) {
            navigate('/userpage');
        } else if (IsAdmin === true) {
            navigate('/adminPage');
        }
    };

    return (
        <div>
            <div>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className='container'>
                <div className='text_hedder'>
                    All Tool List
                </div>
                <div className="submit_last" onClick={NextPage}>Ok</div>
                <div>
                    {/* Render the Tools component with fetched toolList */}
                    <Tools Toolsdata={toolList} />
                </div>
            </div>
        </div>
    );
}

// Define the Tools component

function Tools({ Toolsdata }) {
  return (
    <table style={styles.toolTable}>
      <thead>
        <tr>
          <th style={styles.tableHeader}>ID</th>
          <th style={styles.tableHeader}>Name</th>
          <th style={styles.tableHeader}>Description</th>
          <th style={styles.tableHeader}>Status</th>
          <th style={styles.tableHeader}>Checked Out By</th>
        </tr>
      </thead>
      <tbody>
        {Toolsdata.map((tool, index) => (
          <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <td style={styles.tableCell}>{tool.id}</td>
            <td style={styles.tableCell}>{tool.name}</td>
            <td style={styles.tableCell}>{tool.description}</td>
            <td style={styles.tableCell}>{tool.status}</td>
            <td style={styles.tableCell}>{tool.checkedOutBy ? `Checked out by ${tool.checkedOutBy.username}` : 'Not checked out'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
//   container: {
//     width: '150%', // Adjust this width as needed
//     overflowX: 'auto', // Add horizontal scroll if needed
//     },
  toolTable: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  },
  tableHeader: {
    padding: '8px',
    backgroundColor: '#f2f2f2',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
  tableCell: {
    padding: '8px',
    borderBottom: '1px solid #ddd',
  },
  evenRow: {
    backgroundColor: '#f2f2f2',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
};


export default AllToolList;
