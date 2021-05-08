import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.contactDetails.map(detail => (
        <li>{detail}</li>
      ))}
    </ul>
  );
};

export default Footer;
