import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="side-bar-menu-1">
        <p className="delivery">Delivery Day</p>
        <div className="checkboxes">
          <div>
            <input type="checkbox" className="inputs" />
            <label htmlFor="tomorrow">Get it by Tomorrow</label>
          </div>
          <div>
            <input type="checkbox" className="inputs" />
            <label htmlFor="today">Get it Today</label>
          </div>
        </div>
      </div>
      <div className="side-bar-menu-2">
        <p className="delivery">Department</p>
        <ul className="side-bar-items-list">
          <li>Tools & Home Improvement</li>
          <li>Clothing & Accessories</li>
          <li>Baby</li>
          <li>Grocery & Gourment Foods</li>
          <li>Electronics</li>
          <li>Computers & Accessories</li>
          <li>Sports, Fitness & Outdoors</li>
          <li>Gift Cards</li>
          <li>Home & Kitchen</li>
          <li>Shoes & handbags</li>
          <li>Health & Personal Care</li>
          <li>Office Products</li>
          <li>Video Games</li>
          <li>Luggage & Bags</li>
          <li>Watches</li>
          <li>Beauty</li>
          <li>Software</li>
          <li>Toys & Games</li>
          <li>Jewellery</li>
          <li>Everything Else</li>
          <li>Industrial & Scientific</li>
          <li>Appliances</li>
          <li>Garden & Outdoors</li>
          <li>Musical Instruments</li>
          <li>Pet Supplies</li>
          <li>Car & Motorbike</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
