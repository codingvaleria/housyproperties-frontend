import React, { useEffect, useState } from "react";
import AdminNavBar from "../adminhome/AdminNavbar";
function Complains() {
  const [complains, setComplains] = useState([]);
  const [newData, setNewData] = useState(false);
  useEffect(() => {
    fetch("https://housy-properties-production.up.railway.app/housecomplains")
      .then((r) => r.json())
      .then((data) => setComplains(data));
  }, []);
  function handleDelete(id) {
    console.log(id);
    fetch(
      `https://housy-properties-production.up.railway.app/housecomplains/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then(() => {
        const remainingComplains = complains.filter(
          (remaining) => remaining.id !== id
        );
        setComplains(remainingComplains);
      });
    handleNewData();
  }
  function handleNewData() {
    setNewData((newData) => !newData);
  }
  return (
    <div>
      <AdminNavBar />
      <div className="tittle">
        <h2> House Review/complains</h2>
      </div>
      <table>
        <th>Name</th>
        {/* <th>Phone No</th> */}
        {/* <th>Email</th> */}
        <th>House Type</th>
        <th>Complain</th>
        {/* <th>House No</th> */}
        {/* <th>Location</th> */}
        {/* <th>Unit Type</th> */}
        <th>Action</th>
        {complains.map((c) => (
          <tr>
            <td>{c.Name}</td>
            {/* <td>{c.PhoneNo}</td> */}
            {/* <td>{c.Email}</td> */}
            <td>{c.HouseType}</td>
            <td>{c.complain}</td>
            {/* <td>{c.HouseNo}</td> */}
            {/* <td>{c.location}</td> */}
            {/* <td>{c.UnitType}</td> */}
            <td className="delete">
              <i
                onClick={handleDelete}
                class="fa fa-trash"
                aria-hidden="true"
              ></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Complains;
