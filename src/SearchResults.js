import React from "react";
import moment from "moment";

const SearchResults = props => {
  console.log({ results: props.results });
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
          <tr>
            <td>{customer.firstName}</td>
            <td>{customer.surname}</td>
            <td>{customer.roomId}</td>
            <td>{getDays(customer.checkInDate, customer.checkOutDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function getDays(startDate, endDate) {
  var a = moment(endDate);
  var b = moment(startDate);

  return a.diff(b, "days");
}

export default SearchResults;
