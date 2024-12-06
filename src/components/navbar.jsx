import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../images/logo.svg";
import Gripline from "../images/gripline.svg";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);
  const toggleDropdown = () => {
    if (showDropdown) {
      setIsAnimating(true);
      setTimeout(() => {
        setShowDropdown(false);
        setIsAnimating(false);
      }, 500);
    } else {
      setShowDropdown(true);
    }
  };
  return (
    <div className="navbar">
      <div className="navbarleft">
        <div className="logonavbar">
          {" "}
          <img src={logo} alt="Logo" />
        </div>

        <h2>ProVital</h2>
      </div>
      <div className="navbarright">
        <ul>
          <li>List Your Practice</li>
          <li>
            <hr />
          </li>
          <li>For Employers</li>
          <li>
            <hr />
          </li>
          <li>Courses</li>
          <li>
            <hr />
          </li>
          <li>Books</li>
          <li>
            <hr />
          </li>
          <li>Speakers</li>
          <li>
            <hr />
          </li>
          <li>Doctors</li>
          <li>
            <hr />
          </li>
          <li>
            Login / Sign Up <IoIosArrowDown />
          </li>
        </ul>
      </div>
      <div className="navbarrightmobile" onClick={toggleDropdown}>
        <img src={Gripline} alt="Gripline" />
      </div>
      {showDropdown && (
        <div className={`dropdown ${isAnimating ? "close" : "open"}`}>
          <div className="navbar">
            <div className="navbarleft">
              <div className="logonavbar">
                {" "}
                <img src={logo} alt="Logo" />
              </div>

              <h2>ProVital</h2>
            </div>
            <div className="navbarright">
              <ul>
                <li>List Your Practice</li>
                <li>
                  <hr />
                </li>
                <li>For Employers</li>
                <li>
                  <hr />
                </li>
                <li>Courses</li>
                <li>
                  <hr />
                </li>
                <li>Books</li>
                <li>
                  <hr />
                </li>
                <li>Speakers</li>
                <li>
                  <hr />
                </li>
                <li>Doctors</li>
                <li>
                  <hr />
                </li>
                <li>
                  Login / Sign Up <IoIosArrowDown />
                </li>
              </ul>
            </div>
            <div className="navbarrightmobile" onClick={toggleDropdown}>
              <img src={Gripline} alt="Gripline" />
            </div>
          </div>
          <div className="dropdownbody">
            <div className="signindropdown">
              <div className="signindropdownelement">
                <div className="sigindropdownelementleft">
                  <h3>Doctor</h3>
                </div>
                <div className="sigindropdownelementright">
                  <p>Login</p>
                  <p>Sign Up</p>
                </div>
              </div>
              <hr />
              <div className="signindropdownelement">
                <div className="sigindropdownelementleft">
                  <h3>Patients</h3>
                </div>
                <div className="sigindropdownelementright">
                  <p>Login</p>
                  <p>Sign Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
