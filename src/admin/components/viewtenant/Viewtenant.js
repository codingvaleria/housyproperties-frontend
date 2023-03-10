import React from "react";
import { useState } from "react";
import AdminNavBar from "../adminhome/AdminNavbar";
import { useEffect } from "react"; //FOR API CONSUMPTION
//import tenantData from "./tenantData";
import "./Viewtenant.css";
const Viewtenant = () => {
  const initialState = {
    data: [],
    editingIndex: -1,
    newTenant: {
      name: "",
      last_name: "",
      property_id: "",
      phone_no: "",
      email: "",
      HouseType: "",
      unit_type: "",
      date_in: "",
      //balance: "",
      rent_payable: "",
      action: "",
    },
  };
  const [state, setState] = useState(initialState);
  // FOR API CONSUMPTION
  // const PropertyTable = () => {
  //     const [state, setState] = useState({
  //       data: [],
  //       editingIndex: -1,
  //       newProperties: {
  //         name: "",
  //         type: "",
  //         unit_type: "",
  //         location: "",
  //         amount: ""
  //       }
  //     });
  useEffect(() => {
    fetch("https://housy-properties-production.up.railway.app/tenants")
      .then((response) => response.json())
      .then((data) => setState({ ...state, data }))
      .catch((error) => console.error(error));
  }, []);
  const handleEdit = (index) => {
    setState({ ...state, editingIndex: index });
  };
  const handleChange = (e, index, field) => {
    const updatedData = [...state.data];
    updatedData[index][field] = e.target.value;
    setState({ ...state, data: updatedData });
  };
  const handleSave = () => {
    const confirmSave = window.confirm(
      "Are you sure you want to save the changes?"
    );
    if (confirmSave) {
      setState({ ...state, editingIndex: -1 });
    }
  };
  const handleCancel = () => {
    setState({ ...state, editingIndex: -1 });
  };
  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );
    if (confirmDelete) {
      const updatedData = [...state.data];
      updatedData.splice(index, 1);
      setState({ ...state, data: updatedData });
    }
  };
  return (
    <div>
      <AdminNavBar />
      <div className="tenant-table-container">
        <div className="tenant-table-title">Tenants' Table</div>
        <table className="tenant-table">
          <thead className="tenant-table-header">
            <tr>
              <th className="column-name">First Name</th>
              <th className="column-name">Last Name</th>
              <th className="column-hse-num">House No.</th>
              <th className="column-phone">Phone No.</th>
              <th className="column-email">Email Address</th>
              <th className="column-hse-type">House Type</th>
              <th className="column-unit">Unit Type</th>
              <th className="column-date">Date In</th>
              <th className="column-balance">Balance</th>
              <th className="column-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.data.map((row, index) => (
              <tr key={index} className="tenant-table-row">
                {state.editingIndex === index ? (
                  <>
                    <td>
                      <input
                        value={row.name}
                        onChange={(e) => handleChange(e, index, "name")}
                      />
                    </td>
                    <td>
                      <input
                        value={row.last_name}
                        onChange={(e) => handleChange(e, index, "last_name")}
                      />
                    </td>
                    <td>
                      <input
                        value={row.property_id}
                        onChange={(e) => handleChange(e, index, "property_id")}
                      />
                    </td>
                    <td>
                      <input
                        value={row.phone_no}
                        onChange={(e) => handleChange(e, index, "phone_no")}
                      />
                    </td>
                    <td>
                      <input
                        value={row.email}
                        onChange={(e) => handleChange(e, index, "email")}
                      />
                    </td>
                    <td>
                      <input
                        value={row.HouseType}
                        onChange={(e) => handleChange(e, index, "HouseType")}
                      />
                    </td>
                    <td>
                      <input
                        value={row.unit_type}
                        onChange={(e) => handleChange(e, index, "unit_type")}
                      />
                    </td>
                    <td>
                      <input
                        value={row.date_in}
                        onChange={(e) => handleChange(e, index, "date_in")}
                      />
                    </td>
                    <td>
                      <input
                        value={row.rent_payable}
                        onChange={(e) => handleChange(e, index, "balance")}
                      />
                    </td>
                    <td>
                      <button
                        className="p-edit-button"
                        onClick={() => handleSave()}
                      >
                        Save
                      </button>
                      <button
                        className="p-delete-button"
                        onClick={() => handleCancel()}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{row.name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.property_id}</td>
                    <td>{row.phone_no}</td>
                    <td>{row.email}</td>
                    <td>{row.HouseType}</td>
                    <td>{row.unit_type}</td>
                    <td>{row.date_in}</td>
                    <td>{row.rent_payable}</td>
                    <td>
                      <button
                        className="p-edit-button"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="p-delete-button"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Viewtenant;
