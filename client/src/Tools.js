import React from 'react';

export default function Tools({ Toolsdata }) {
  return (
    <React.Fragment>
      {Toolsdata.map((tData, index) => (
        <tr key={index}>
          <td>{tData.id}</td>
          <td>{tData.toolname}</td>
          <td></td>
        </tr>
      ))}
    </React.Fragment>
  );
}