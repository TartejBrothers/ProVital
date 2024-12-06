import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";
import Search from "../components/search";
import LifeStyleComponent from "../components/lifestylebox";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import LifeStyleComponentImage from "../images/lifestyle/lifestyleimages1.jpg";
import LifeStyleComponentImage2 from "../images/lifestyle/lifestyleimages2.jpg";
import LifeStyleComponentImage3 from "../images/lifestyle/lifestyleimages3.jpg";
import LifeStyleComponentImage4 from "../images/lifestyle/lifestyleimages4.jpg";
import LifeStyleComponentImage5 from "../images/lifestyle/lifestyleimages5.jpg";
import LifeStyleComponentImage6 from "../images/lifestyle/lifestyleimages6.jpg";

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
    const itemWidth = 500; // Assume each item has a width of 500px
    const index = Math.round(scrollLeft / itemWidth);
    setSelected(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homemain">
      <Navbar />
      <Search />
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
            header={"Nutrition"}
            content={
              "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage3}
            header={"Physical activity"}
            content={
              "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage4}
            header={"Restorative sleep"}
            content={
              "Consistent, quality sleep is essential for cognitive function and physical health."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage5}
            header={"Stress management"}
            content={
              "Effective stress management techniques are crucial for mental well-being and overall health."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage6}
            header={"Social connection"}
            content={
              "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health."
            }
          />
          <LifeStyleComponent
            mainimage={LifeStyleComponentImage}
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
