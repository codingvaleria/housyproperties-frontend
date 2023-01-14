import React from "react";
import { useState } from "react";
import  logo from "../../../images/logo.png"
import "./Viewproperty.css"
import propertiesData from "./propertiesData";
// import React, { useState, useEffect } from 'react'; FOR API CONSUMPTION
import AdminBanner from "../adminhome/AdminBanner";
import AdminNavBar from "../adminhome/AdminNavbar";

const Viewproperty = () => {
  const initialState = {
    data: propertiesData,
    editingIndex: -1,
    newProperties: {
      name: "",
      type: "",
      unit_type: "",
      location: "",
      amount: ""
    }
  }
  
  const [state, setState] = useState(initialState);

// FOR API CONSUMPTION
  // const Viewproperty = () => {
  //   const [state, setState] = useState({
  //     data: [],
  //     editingIndex: -1,
  //     newProperties: {
  //       name: "",
  //       type: "",
  //       unit_type: "",
  //       location: "",
  //       amount: ""
  //     }
  //   });
  
  //   useEffect(() => {
  //     fetch('https://your-api-endpoint.com/properties')
  //       .then(response => response.json())
  //       .then(data => setState({ ...state, data }))
  //       .catch(error => console.error(error));
  //   }, []);

  const handleEdit = (index) => {
    setState({...state, editingIndex: index});
  }

  const handleChange = (e, index, field) => {
    const updatedData = [...state.data];
    updatedData[index][field] = e.target.value;
    setState({...state, data: updatedData});
  }

  const handleSave = () => {
    const confirmSave = window.confirm("Are you sure you want to save the changes?");
    if (confirmSave) {
      setState({...state, editingIndex: -1});
    }
  }
  

  return (
    <div>
      <AdminNavBar />
      <div className="property-table-container">
      <div className="property-table-title">Property Table</div>
      <table className="property-table">
        <thead className="property-table-header">
          <tr>
            <th className="column-name">Name</th>
            <th className="column-image">Image</th>
            <th className="column-type">Type</th>
            <th className="column-unit">Unit Type</th>
            <th className="column-location">Location</th>
            <th className="column-amount">Amount</th>
            <th className="column-action">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="property-table-row">
              <td>{row.name}</td>
              <td>
                <img className="p-img" src={logo} alt={row.name} width="100" />
              </td>
              <td>{row.type}</td>
              <td>{row.unit_type}</td>
              <td>{row.location}</td>
              <td>{row.amount}</td>
              <td>
                <button className="p-edit-button" onClick={() => handleEdit(index)}>Edit</button>
                <button className="p-delete-button" onClick={() => handleDelete(index)}>Delete</button>
              </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Viewproperty;
