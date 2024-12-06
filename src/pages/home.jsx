import React, { useState, useRef, useEffect } from "react";
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

import LifeStyleComponent from "../components/lifestylebox";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import LifeStyleComponentImage from "../images/lifestyle/lifestyleimages1.jpg";
import LifeStyleComponentImage2 from "../images/lifestyle/lifestyleimages2.jpg";
import LifeStyleComponentImage3 from "../images/lifestyle/lifestyleimages3.jpg";
import LifeStyleComponentImage4 from "../images/lifestyle/lifestyleimages4.jpg";
import LifeStyleComponentImage5 from "../images/lifestyle/lifestyleimages5.jpg";
import LifeStyleComponentImage6 from "../images/lifestyle/lifestyleimages6.jpg";
import LifeStyleIconone from "../images/icons/lifestyleicon1.svg";
import LifeStyleIcontwo from "../images/icons/lifestyleicon2.svg";
import LifeStyleIconthree from "../images/icons/lifestyleicon3.svg";
import LifeStyleIconfour from "../images/icons/lifestyleicon4.svg";
import LifeStyleIconfive from "../images/icons/lifestyleicon5.svg";
import LifeStyleIconsix from "../images/icons/lifestyleicon6.svg";
export default function Home() {
  const scrollContainerRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const options = [
    "Nutrition",
    "Physical activity",
    "Restorative sleep",
    "Stress management",
    "Social connection",
    "Substance abuse",
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollLeft = scrollContainerRef.current.scrollLeft;

    const itemWidth = 480;
    const index = Math.round(scrollLeft / itemWidth);
    setSelected(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    console.log(container.scrollLeft);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className="centercutline"></div>
      <div className="mobileimagesrow">
        <div className="mobileimagesrowscroll-wrapper">
          <div className="mobileimagesrowscroll">
            <img src={Homeleftcolumnone} alt="One" />
            <img src={Homeleftcolumntwo} alt="Two" />
            <img src={Homeleftcolumnthree} alt="Three" />
            <img src={Homeleftcolumnfour} alt="Four" />
            <img src={Homerightcolumnone} alt="One" />
            <img src={Homerightcolumntwo} alt="Two" />
            <img src={Homerightcolumnthree} alt="Three" />
            <img src={Homerightcolumnfour} alt="Four" />
          </div>

          <div className="mobileimagesrowscroll">
            <img src={Homeleftcolumnone} alt="One" />
            <img src={Homeleftcolumntwo} alt="Two" />
            <img src={Homeleftcolumnthree} alt="Three" />
            <img src={Homeleftcolumnfour} alt="Four" />
            <img src={Homerightcolumnone} alt="One" />
            <img src={Homerightcolumntwo} alt="Two" />
            <img src={Homerightcolumnthree} alt="Three" />
            <img src={Homerightcolumnfour} alt="Four" />
          </div>
        </div>
      </div>
      <div className="homelifestyle">
        <div className="homelifestyleheader">
          <div className="homelifestyleheaderleft">
            <p>HOW IT WORKS</p>
            <h4>
              <i>Lifestyle as medicine: </i>
              The six pillars
            </h4>
          </div>
          <div className="homelifestyleheaderright">
            <div className="arrowrow">
              <div className="arrowcircle" onClick={scrollLeft}>
                <FaArrowLeft />
              </div>
              <div className="arrowcircle" onClick={scrollRight}>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="homelifestyleoptions">
          {options.map((option, index) => (
            <button
              key={index}
              className={`homelifestyleoption ${
                selected === index ? "buttonselected" : ""
              }`}
              onClick={() => {
                setSelected(index);
                scrollContainerRef.current.scrollTo({
                  left: index * 500,
                  behavior: "smooth",
                });
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="homelifestylerow" ref={scrollContainerRef}>
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage2}
            icon={LifeStyleIconone}
            bubbletextmain={"121/80"}
            bubbletextsub={"mmHg"}
            header={"Nutrition"}
            content={
              "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage3}
            icon={LifeStyleIconthree}
            bubbletextmain={"32"}
            bubbletextsub={"minutes"}
            header={"Physical activity"}
            content={
              "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage4}
            icon={LifeStyleIcontwo}
            bubbletextmain={"8"}
            bubbletextsub={"hours"}
            header={"Restorative sleep"}
            content={
              "Consistent, quality sleep is essential for cognitive function and physical health."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage5}
            icon={LifeStyleIconfour}
            bubbletextmain={"60"}
            bubbletextsub={"bpm"}
            header={"Stress management"}
            content={
              "Effective stress management techniques are crucial for mental well-being and overall health."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage6}
            icon={LifeStyleIconfive}
            bubbletextmain={"Feeling"}
            bubbletextsub={"better"}
            header={"Social connection"}
            content={
              "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage}
            icon={LifeStyleIconsix}
            bubbletextmain={"62"}
            bubbletextsub={"days"}
            header={"Substance abuse"}
            content={
              "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health."
            }
          />
        </div>
      </div>
    </div>
  );
}
