import React, { useState, useEffect } from "react";
import CustomerProfile from "./CustomerProfile.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  // useEffect(() => {
  // console.log("page loaded")
  // fetch("https://cyf-react.glitch.me")
  // .then((res) => res.json())
  // .then((bookings) => {
  //   setBookings(bookings)
  // });
  // }, [])

  const search = searchVal => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(bookings => {
        const filteredGuests = bookings.filter(guest => {
          return (
            guest.firstName.toLowerCase().indexOf(searchVal.toLowerCase()) !==
            -1
          );
        });

        setBookings(filteredGuests);
      });
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
