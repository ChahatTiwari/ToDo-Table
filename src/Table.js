import React, { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import EditTable from "./EditTable";
import ReadOnlyRow from "./ReadOnlyRow";
import "bootstrap/dist/css/bootstrap.min.css";
const Table = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userAdd: "",
    userPhone: "",
    userMail: "",
    id: nanoid(),
  });
  const [editformData, setEditFormData] = useState({
    userName: "",
    userAdd: "",
    userPhone: "",
    userMail: "",
    id: nanoid(),
  });
  const [editDetailsId, setEditDetailsId] = useState(null);
  const [allData, setAllData] = useState([]);

  const handleAdd = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllData([...allData, formData]);
    setFormData({
      userName: "",
      userAdd: "",
      userPhone: "",
      userMail: "",
      id: nanoid(),
    });
    console.log("submit : " , allData)
  };

  const handleEdit = (e, data) => {
    e.preventDefault();
    setEditDetailsId(data.id);

    const formsValues = {
      userName: data.userName,
      userAdd: data.userAdd,
      userPhone: data.userPhone,
      userMail: data.userMail,
    };
    setEditFormData(formsValues);
  };

  const handleEditFormChange = (e) => {
    setEditFormData({ ...editformData, [e.target.name]: e.target.value });
  };
  const handleEditFormSubmit = (e) => { 
    e.preventDefault();
    console.log(editformData);
    const editedData = {
      id: editDetailsId,
      userName: editformData.userName,
      userAdd: editformData.userAdd,
      userPhone: editformData.userPhone,
      userMail: editformData.userMail,
    };
    const finalData = [...allData];

    const index = allData.findIndex((data) => data.id === editDetailsId);
    finalData[index] = editedData;
    setAllData(finalData);
    console.log(allData);
    setEditDetailsId(null);
  };
  const handleDelete = (contactId) => {
    const index = allData.findIndex((data) => data.id === contactId);
    const newData = [...allData];
    newData.splice(index, 1);
    setAllData(newData);
  };

  return (
    <>
      <h1>Add Details</h1>
      <form className="input1" onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={formData.userName}
          name="userName"
          placeholder="enter your name"
          onChange={handleAdd}
        ></input>
        <input
          type={"text"}
          name="userAdd"
          value={formData.userAdd}
          placeholder="enter your address"
          onChange={handleAdd}
        ></input>
        <input
          type={"number"}
          name="userPhone"
          value={formData.userPhone}
          placeholder="enter your phone number"
          onChange={handleAdd}
        ></input>
        <input
          type={"email"}
          name="userMail"
          value={formData.userMail}
          placeholder="enter your E-mail address"
          onChange={handleAdd}
        ></input>

        <button type="submit">Add</button>
        <button onClick={() => setAllData([])}>Clear all</button>
      </form>
      <div className="app-container">
        <div className="App">
          <form onSubmit={handleEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>E-mail</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allData.map((data) => (
                  <tr key={data.id}>
                    {editDetailsId === data.id ? (
                      <EditTable
                        editformData={editformData}
                        handleEditFormChange={handleEditFormChange}
                      />
                    ) : (
                      <ReadOnlyRow
                        data={data}
                        click={handleEdit}
                        saved={handleEditFormSubmit}
                        handleDelete={handleDelete}
                      ></ReadOnlyRow>  
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};
export default Table;

























