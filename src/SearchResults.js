import React, { useState } from "react";
import Customer from "./Customer";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [customerId, setCustomerId] = useState(null);

  const onShowProfile = customerId => {
    setCustomerId(customerId);
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Room number</th>
            <th scope="col">Number of days</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {props.results.map(customer => (
            <Customer customer={customer} onShowProfile={onShowProfile} />
          ))}
        </tbody>
      </table>
      {customerId && <CustomerProfile customerId={customerId} />}
    </div>
  );
};

export default SearchResults;
