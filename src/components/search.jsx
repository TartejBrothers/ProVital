import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import HealthCardIcon from "../images/icons/healthcard.svg";
export default function Search() {
  return (
    <div className="searchbox">
      <form action="">
        <div className="inputdiv">
          <IoSearch />
          <input type="text" placeholder="Condition, procedure, speciality.." />
        </div>
        <div className="inputdiv">
          <IoLocationSharp />
          <input type="text" placeholder="City, state, or zipcode" />
        </div>
        <div className="inputdiv">
          <img src={HealthCardIcon} alt="Icon" />
          <input type="text" placeholder="Insurance carrier" />
        </div>
        <button>
          <IoSearch />
          Find now
        </button>
      </form>
    </div>
  );
}
