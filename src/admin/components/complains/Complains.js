import React from "react";
import AdminNavBar from "../adminhome/AdminNavbar";

function Complains() {
  return (
    <div>
      <AdminNavBar />
      <div className="tittle">
        <h2> House Review/complains</h2>
      </div>
      <table>
        <th>Name</th>
        <th>House No</th>
        <th>Phone No</th>
        <th>House Type</th>
        <th>Unit Type</th>
        <th>Location</th>
        <th>Complain</th>
        <th>Action</th>
        <th>Status</th>
        <tr>
          <td>James</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>2 bdrm</td>
          <td>Rongai</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            similique quisquam molestias optio dicta esse? Voluptate magni
            voluptatem iste excepturi.
          </td>
          <td className="delete">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </td>
          <td>
            <select>
              <option>Closed</option>
              <option>In Progress</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>David</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>2 bdrm</td>
          <td>Nairobi</td>
          <td>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis non
            aliquid aspernatur consequatur voluptates aut doloremque eum
            deleniti hic totam?
          </td>
          <td className="delete">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </td>
          <td>
            <select>
              <option>Closed</option>
              <option>In Progress</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Villa</td>
          <td>3 bdrm</td>
          <td>Nairobi</td>
          <td>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ad
            asperiores, reprehenderit commodi dolorem molestias omnis expedita
            libero repellendus quia suscipit voluptatum nihil, quos enim
            doloremque maiores quo, at dolore.
          </td>
          <td className="delete">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </td>
          <td>
            <select>
              <option>Closed</option>
              <option>In Progress</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Duncan</td>
          <td>2</td>
          <td>254712345678</td>
          <td>Family House</td>
          <td>1 bdrm</td>
          <td>Nairobi</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            blanditiis architecto error omnis. Deleniti omnis iste culpa sunt
            odio reiciendis.
          </td>
          <td className="delete">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </td>
          <td>
            <select>
              <option>Closed</option>
              <option>In Progress</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Joseph</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>3 bdrm</td>
          <td>Ruiru</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            error natus debitis enim praesentium dolore sint vel ducimus
            expedita minima?
          </td>
          <td className="delete">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </td>
          <td>
            <select>
              <option>Closed</option>
              <option>In Progress</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>12</td>
          <td>254712345678</td>
          <td>Apartment</td>
          <td>2 bdrm</td>
          <td>Nairobi</td>
          <td>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
            asperiores.
          </td>
          <td className="delete">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </td>
          <td>
            <select>
              <option>Closed</option>
              <option>In Progress</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Complains;
