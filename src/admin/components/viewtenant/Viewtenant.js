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

export default Viewtenant;
