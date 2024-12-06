import React from "react";

export default function LifeStyleComponent({
  mainimage,
  icon,
  bubbletextmain,
  bubbletextsub,
  header,
  content,
}) {
  return (
    <div className="lifestylecard">
      <div className="lifestylecardtop">
        <img src={mainimage} alt="Main" />
        <div className="lifestylebubble">
          <img src={icon} alt="Icon" />
          <div className="lifestylebubbletext">
            <h3>{bubbletextmain}</h3>
            <p>{bubbletextsub}</p>
          </div>
        </div>
      </div>
      <div className="lifestylecardbody">
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
