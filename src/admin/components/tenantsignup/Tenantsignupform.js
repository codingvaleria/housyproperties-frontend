import React,{useState} from "react";
import "./Tenantsignupform.css";
import AdminNavBar from "../adminhome/AdminNavbar";


export default function Tenantsignup() {
  const [name,setName]=useState("")
  const [lastName,setLastName]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [unitType,setUnitType]=useState("")
  const [dateIn,setDateIn]=useState("")
  const [rentPayable,setRentPayable]=useState("")
  const [houseNumber,setHouseNumber]=useState("")
  const [email,setEmail]=useState("")
  const [houseType,setHouseType]=useState("")
  const [password,setPassword]=useState("")

  function handleSubmit(e){
    const tenant={
      name: name,
      last_name: lastName,
      phone_no: phoneNumber,
      unit_type: unitType,
      date_in: dateIn,
      rent_payable: rentPayable,
      property_id: houseNumber,
      email:email,
      password:password,
      HouseType:houseType
    }
    e.preventDefault();

    fetch("https://housy-properties-production.up.railway.app/tenants",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(tenant)
    })
    
  }

  return (
    <div className="form-wrapper">
      <AdminNavBar />
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="title">Tenant Sign up Form </div>
        <div className="tenant-form">
          <div className="input-field">
            <i className="icon fa fa-user" aria-hidden="true"></i>
            <input
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="First Name"
              id="First Name"
              name="First Name"
              value={name}
              
            />
          </div>
          <div className="input-field">
            <i className="icon fa fa-user" aria-hidden="true"></i>
            <input
              onChange={(e)=>setLastName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Last Name"
              id="Last Name"
              name="Last Name"
              value={lastName}
            />
          </div>
          <div className="input-field">
            <i className="icon fa fa-phone" aria-hidden="true"></i>
            <input
              onChange={(e)=>setPhoneNumber(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Phone No"
              id="Phone No"
              name="Phone No"
              value={phoneNumber}
            />
          </div>
          <div className="input-field">
            <i className="icon fa fa-envelope" aria-hidden="true"></i>
            <input
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Email Address"
              id="Email Address"
              name="Email Address"
              value={email}
            />
          </div>
          <div className="input-field">
            <i className="icon fa fa-key" aria-hidden="true"></i>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              type="password"
              placeholder="Password"
              id="Password"
              name="Password"
              value={password}
            />
          </div>
          <div className="input-field">
            <i className="icon fa fa-home" aria-hidden="true"></i>
            <input
              onChange={(e)=>setHouseNumber(e.target.value)}
              className="form-control"
              type="text"
              placeholder="House No."
              id="House No."
              name="House No."
              value={houseNumber}
            />
          </div>
          <div className="input-field">
            <div className="custom-select">
              <i className="icon fa fa-home" aria-hidden="true"></i>
              <input
              onChange={(e)=>setHouseType(e.target.value)}
              className="form-control"
              type="text"
              placeholder="House Type."
              id="House No."
              name="House No."
              value={houseType}
            />
            </div>
          </div>
          <div className="input-field">
            <div className="custom-select">
              <i className="icon fa fa-home" aria-hidden="true"></i>
              <input
              onChange={(e)=>setUnitType(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Unit Type"
              id="House No."
              name="House No."
              value={unitType}
            />
            </div>
          </div>
          <div className="input-field">
            <i className="icon fa fa-money" aria-hidden="true"></i>
            <input
              onChange={(e)=>setRentPayable(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Rent payable"
              id="Rent payable"
              name="Rent payable"
              value={rentPayable}
            />
          </div>
          <div className="input-field">
            <i className="icon fa fa-calendar" aria-hidden="true"></i>
            <input
              onChange={(e)=>setDateIn(e.target.value)}
              className="form-control"
              type="date"
              placeholder="pick date"
              id="Rent payable"
              name="Rent payable"
              value={dateIn}
            />
          </div>
          <div className="submit-wrapper">
            <input type="submit" value="Add Tenant"></input>
          </div>
        </div>
      </form>
    </div>
  );
}
