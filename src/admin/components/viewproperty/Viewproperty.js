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
      
    </div>
  );
}

export default Viewproperty;
