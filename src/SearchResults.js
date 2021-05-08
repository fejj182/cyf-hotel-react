import React from "react";
import Customer from "./Customer";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Room number</th>
          <th scope="col">Number of days</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(customer => (
          <Customer customer={customer} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
