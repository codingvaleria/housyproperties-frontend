import React from "react";
import AdminNavBar from "../adminhome/AdminNavbar";
import "./Viewtenant.css";
function Viewtenant() {
  return (
    <div>
      <AdminNavBar />
      <div className="tittle">
        <h2>Tenants View Table</h2>
      </div>
      <table>
        <th>Name</th>
        <th>House No</th>
        <th>Phone No</th>
        <th>House Type</th>
        <th>Unit Type</th>
        <th>Date in</th>
        <th>Balance Due</th>
        <th>Action</th>
        <tr>
          <td>Michael</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>2 bdrm</td>
          <td>12/1/2023</td>
          <td>30,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>2 bdrm</td>
          <td>12/1/2023</td>
          <td>30,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Villa</td>
          <td>2 bdrm</td>
          <td>12/1/2023</td>
          <td>30,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Duncan</td>
          <td>2</td>
          <td>254712345678</td>
          <td>Family House</td>
          <td>1 bdrm</td>
          <td>12/1/2023</td>
          <td>30,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Joseph</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>3 bdrm</td>
          <td>1/1/2023</td>
          <td>50,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>2 bdrm</td>
          <td>12/1/2023</td>
          <td>30,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>2 bdrm</td>
          <td>12/1/2023</td>
          <td>30,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Villa</td>
          <td>2 bdrm</td>
          <td>12/1/2023</td>
          <td>30,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Duncan</td>
          <td>2</td>
          <td>254712345678</td>
          <td>Family House</td>
          <td>1 bdrm</td>
          <td>12/1/2023</td>
          <td>30,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Joseph</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>3 bdrm</td>
          <td>1/1/2023</td>
          <td>50,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>2 bdrm</td>
          <td>12/1/2023</td>
          <td>30,000</td>
          <td className="delete"></td>
          <td className="edit"></td>
        </tr>
      </table>
    </div>
  );
}

export default Viewtenant;
