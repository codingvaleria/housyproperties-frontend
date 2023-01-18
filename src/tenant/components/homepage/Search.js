import React, { useState } from "react";
import "./Search.css";

export default function Search({ data, setData }) {
  let [query, setQuery] = useState("");

  function handleQuery(e) {
    e.preventDefault();
    console.log(query);

    fetch(
      "https://housy-properties-production.up.railway.app/property_search", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      }
    )
      .then((response) => response.json())
      .then((res) => setData(res));
  }

  return (
    <div className="search">
      <form className="search-container" onSubmit={handleQuery}>
        <div className="search-inner">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search property"
          />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
