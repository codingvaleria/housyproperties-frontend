import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log(searchTerm);
  };

  return (
    <div className="search">
      <div className="search-container">
        <div className="search-inner">
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search property"
          />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}
