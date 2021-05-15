import React, { useState } from "react";
import moment from "moment";

const Customer = ({ customer, onShowProfile }) => {
  const [activeRow, setActiveRow] = useState("");

  const highlightRow = () => {
    if (activeRow === "") {
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

  const onClickProfileButton = () => {
    onShowProfile(customer.id);
  };

  return (
    <tr className={activeRow}>
      <td onClick={highlightRow}>{customer.firstName}</td>
      <td onClick={highlightRow}>{customer.surname}</td>
      <td>{customer.roomId}</td>
      <td>{getDays(customer.checkInDate, customer.checkOutDate)}</td>
      <td>
        <button className="btn btn-primary" onClick={onClickProfileButton}>
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default Customer;
