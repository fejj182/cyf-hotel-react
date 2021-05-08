import React, { useState } from "react";

const Search = props => {
  const onChange = () => {
    props.search(document.getElementById("customerName").value);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          {/* <form className="form-group search-box"> */}
          <label htmlFor="customerName">Customer name</label>
          <div className="search-row">
            <input
              type="text"
              id="customerName"
              className="form-control"
              placeholder="Customer name"
              onChange={onChange}
            />
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
