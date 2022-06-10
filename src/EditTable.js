import React from "react";
// import "./App.css";
const EditTable = ({ editformData, handleEditFormChange }) => {
  return (
    <>
    
        <td>
          <input
            type="text"
            placeholder="enter a name"
            name="userName"
            defaultValue={editformData.userName}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            placeholder="enter a address"
            name="userAdd"
            defaultValue={editformData.userAdd}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            placeholder="enter a phone number"
            name="userPhone"
            defaultValue={editformData.userPhone}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            placeholder="enter a mail"
            name="userMail"
            defaultValue={editformData.userMail}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
            <button type="submit">save</button>
        </td>
      
    </>
  );
};

export default EditTable;
