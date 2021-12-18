import React, { useState } from "react";

function Dropdown({ options, selected, onSelectChange }) {
  const [active, setActive] = useState(false);

  const renderedList = options.map((item, index) => {
    return (
      <div
        className="item"
        onClick={() => onSelectChange(item)}
        style={{ color: `${item.value}` }}
        key={index}
      >
        {item.label}
      </div>
    );
  });

  function onActive() {
    setActive((active) => !active);
  }

  const transition = active === true ? "transition" : "";

  return (
    <div onClick={onActive} className="ui selection dropdown">
      <i className="dropdown icon"></i>
      <div className="default text" style={{ color: `${selected.value}` }}>
        {selected.label}
      </div>
      <div className={`menu visible ${transition}`}>{renderedList}</div>
    </div>
  );
}

export default Dropdown;
