import React, { useState } from "react";
import moment from "moment";

const Customer = ({ customer }) => {
  const [activeRow, setActiveRow] = useState("");

  const highlightRow = () => {
    if (activeRow == "") {
      setActiveRow("active-row");
    } else {
      setActiveRow("");
    }
  };

  function getDays(startDate, endDate) {
    var a = moment(endDate);
    var b = moment(startDate);

    return a.diff(b, "days");
  }

  return (
    <tr onClick={highlightRow} className={activeRow}>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.roomId}</td>
      <td>{getDays(customer.checkInDate, customer.checkOutDate)}</td>
    </tr>
  );
};

export default Customer;
