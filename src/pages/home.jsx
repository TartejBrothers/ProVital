import React from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";
import Homeleftcolumnone from "../images/hometop/homeleftone1.jpg";
import Homeleftcolumntwo from "../images/hometop/homeleftone2.jpg";
import Homeleftcolumnthree from "../images/hometop/homeleftone3.jpg";
import Homeleftcolumnfour from "../images/hometop/homeleftone4.jpg";
import Homerightcolumnone from "../images/hometop/homelefttwo1.jpg";
import Homerightcolumntwo from "../images/hometop/homelefttwo2.jpg";
import Homerightcolumnthree from "../images/hometop/homelefttwo3.jpg";
import Homerightcolumnfour from "../images/hometop/homelefttwo4.jpg";
import Search from "../components/search";

export default function Home() {
  return (
    <div className="homemain">
      <Navbar />
      <div className="hometop">
        <div className="hometopleft">
          <div className="homeleftcolumonemain">
            <div className="homeleftcolumnone">
              <img src={Homeleftcolumnone} alt="One" />
              <img src={Homeleftcolumntwo} alt="Two" />
              <img src={Homeleftcolumnthree} alt="Three" />
              <img src={Homeleftcolumnfour} alt="Four" />
            </div>
            <div className="homeleftcolumnone">
              <img src={Homeleftcolumnone} alt="One" />
              <img src={Homeleftcolumntwo} alt="Two" />
              <img src={Homeleftcolumnthree} alt="Three" />
              <img src={Homeleftcolumnfour} alt="Four" />
            </div>
          </div>
          <div className="homeleftcolumonemain">
            <div className="homeleftcolumntwo">
              <img src={Homerightcolumnone} alt="One" />
              <img src={Homerightcolumntwo} alt="Two" />
              <img src={Homerightcolumnthree} alt="Three" />
              <img src={Homerightcolumnfour} alt="Four" />
            </div>
            <div className="homeleftcolumntwo">
              <img src={Homerightcolumnone} alt="One" />
              <img src={Homerightcolumntwo} alt="Two" />
              <img src={Homerightcolumnthree} alt="Three" />
              <img src={Homerightcolumnfour} alt="Four" />
            </div>
          </div>
        </div>
        <div className="hometopright">
          <h1>
            Book an appointment with{" "}
            <span className="gradientcolor">lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>
      </div>
      <Search />
    </div>
  );
}
