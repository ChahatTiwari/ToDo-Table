import React from "react";
// import "./App.css";
const ReadOnlyRow = ({ data, click, handleDelete }) => {
  return (
    <>
      <td>{data.userName}</td>
      <td>{data.userAdd}</td>
      <td>{data.userPhone}</td>
      <td>{data.userMail}</td>
      <td>
        <button onClick={(e) => click(e, data)}>Edit</button>
        <button onClick={() => handleDelete(data.id)}>Delete</button>
      </td>
    </>
  );
};

export default ReadOnlyRow;
