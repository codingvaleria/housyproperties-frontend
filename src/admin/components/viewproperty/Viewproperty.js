import React from "react";
import AdminBanner from "../adminhome/AdminBanner";
import AdminNavBar from "../adminhome/AdminNavbar";

const Viewproperty = () => {
  const [data, setData] = useState(propertiesData);

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  }

  const handleEdit = (index) => {
    const updatedData = [...data];
    updatedData[index].name = "Edited";
    // make changes to the specific item in updatedData 
    setData(updatedData);
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
        
    </div>
  );
}

export default Viewproperty;
