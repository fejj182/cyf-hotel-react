import React, { useState, useEffect } from "react";

const CustomerProfile = ({ customerId }) => {
  const [customerProfile, setCustomerProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then(res => res.json())
      .then(customerProfileData => {
        console.log(customerProfileData);
        setCustomerProfile(customerProfileData);
      });
  }, [customerId]);

  return (
    <div className="customer-profile">
      <h1>Customer Profile</h1>
      {customerProfile && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{customerProfile.id}</td>
              <td>{customerProfile.email}</td>
              <td>{customerProfile.vip ? "VIP" : "Normal person :)"}</td>
              <td>{customerProfile.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerProfile;
