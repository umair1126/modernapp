import React, { useState } from "react";
import "./accordion.css";

function AccordianItem(props) {
  const [activeIndex, setActiveIndex] = useState(false);

  const onTitleClick = () => {
    setActiveIndex((activeIndex) => !activeIndex);
  };

  const active = activeIndex === true ? "active" : "";

  return (
    <div onClick={() => onTitleClick()}>
      <div className={`title ${active}`}>
        <i className="dropdown icon"></i>
        {props.item.title}
      </div>
      <div className={`content ${active}`}>
        <p id="accordion">{props.item.content}</p>
      </div>
    </div>
  );
}

export default AccordianItem;
