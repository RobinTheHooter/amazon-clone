import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./SecondSideBar.css";

function SecondSideBar(props) {
  return (
    <div
      className="side-bar-menu"
      style={
        props.state === "entering"
          ? { animation: "showSideBar 0.3s forwards" }
          : props.state === "entered"
          ? { transform: "translateX(-0px)" }
          : { animation: "showSideBar 0.3s reverse backwards" }
      }
    >
      <Link to="/login" className="side-bar-header">
        <FaIcons.FaUserCircle className="login-user-icon" />
        <p> Hello, Sign In</p>
      </Link>
      <div className="main-container">
        <div className="side-bar-content-header">Trending</div>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-content">Best Sellers</div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-content">New Releases</div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-content">Movers and Shakers</div>
        </Link>
        <hr />
        <div className="side-bar-content-header">
          Digital Content and Devices
        </div>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Echo & Alexa</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Fire TV</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Kindle E-Readers & eBooks</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Audible Audiobooks</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Amazon Prime Video</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Amazon Prime Music</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <hr />
        <div className="side-bar-content-header">Shop By Department</div>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Mobiles, Computers</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>TV, Appliances, Electronics</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Men's Fashion</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Women's Fashion</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <div className="side-bar-dropdown" id="first-container-dropdown">
          <p className="see-all">See All</p>
          <FaIcons.FaChevronDown className="chevron-down" />
        </div>

        <hr />
        <div className="side-bar-content-header">Programs & Features</div>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Gift Cards & Mobile Recharges</p>
            <FaIcons.FaChevronRight className="chevron-right" />
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Flight Tickets</p>
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>#FoundItOnAmazon</p>
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Clearance Store</p>
          </div>
        </Link>
        <hr />
        <div className="side-bar-content-header">Help & Settings</div>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Your Account</p>
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Customer Service</p>
          </div>
        </Link>
        <Link to="#" className="side-bar-content-links">
          <div className="side-bar-row">
            <p>Sign In</p>
          </div>
        </Link>

        {/* empty space */}

        <div className="empty-space">
          <p>empty Space</p>
        </div>
        <div className="empty-space">
          <p>empty Space</p>
        </div>
        <div className="empty-space">
          <p>empty Space</p>
        </div>

        {/* empty space */}

        {/* Line breaks */}

        <br />
        <br />
        <br />
        {/* Line breaks */}
      </div>
    </div>
  );
}

export default SecondSideBar;
