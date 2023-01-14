import React from "react";
import AdminNavBar from "../adminhome/AdminNavbar";
import "./Viewtenant.css";
function Viewtenant() {
  return (
    <div>
      <AdminNavBar />
      <div className="tenant-table-container">
          <div className="tenant-table-title">Tenants' Table</div>
          <table className="tenant-table">
            <thead className="tenant-table-header">
              <tr>
                <th className="column-name">Name</th>
                <th className="column-hse-num">House No.</th>
                <th className="column-phone">Phone No.</th>
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
                        {state.editingIndex === index ?
                        (
                          <>
                                <td>
                                    <input value={row.name} onChange={e => handleChange(e, index, "name")} />
                                </td>
                                <td>
                                    <input value={row.hse_num} onChange={e => handleChange(e, index, "hse_num")} />
                                </td>
                                <td>
                                    <input value={row.phone} onChange={e => handleChange(e, index, "phone")} />
                                </td>
                                <td>
                                    <input value={row.hse_type} onChange={e => handleChange(e, index, "hse_type")} />
                                </td>
                                <td>
                                    <input value={row.unit_type} onChange={e => handleChange(e, index, "unit_type")} />
                                </td>
                                <td>
                                    <input value={row.date_in} onChange={e => handleChange(e, index, "date_in")} />
                                </td>
                                <td>
                                    <input value={row.balance} onChange={e => handleChange(e, index, "balance")} />
                                </td>
                                <td>
                                    <button className="p-edit-button" onClick={() => handleSave()}>Save</button>
                                    <button className="p-delete-button" onClick={() => handleCancel()}>Cancel</button>
                                </td>
                            </>
                        ) : (  

export default Viewtenant;
