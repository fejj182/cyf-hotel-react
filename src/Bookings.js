import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    const guests = FakeBookings;

    const filteredGuests = guests.filter(guest => {
      return guest.firstName.toLowerCase() === searchVal.toLowerCase();
    });

    setBookings(filteredGuests);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
