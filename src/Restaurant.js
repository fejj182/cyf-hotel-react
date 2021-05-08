import React from "react";
import Order from "./Order";

const Restaurant = () => {
  const courses = ["Pizzas", "Salads", "Chocolate cake"];
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {courses.map(course => {
          return <Order orderType={course} />;
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
