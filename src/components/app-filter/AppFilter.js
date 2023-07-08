import React, { useState } from "react";
import "./AppFilter.css";
const AppFilter = ({ updateFilter }) => {
  const [activeButton, setActiveButton] = useState(1);
  const buttons = [
    { id: 1, label: "Barcha kinolar", text: "app" },
    { id: 2, label: "Eng ko'p ko'rilgan kinolar", text: "mostView" },
    { id: 3, label: "Eng mashhur kinolar", text: "liked"},
  ];
  const handleClick = (btnId) => {
   setActiveButton(btnId.id);
     updateFilter(btnId.text)
  };
  return (
    <div className="wrapper-btn">
      {buttons.map((btn) => (
        <button
        type="button"
          className={`btn ${activeButton === btn.id ? "active" : ""}`}
          onClick={(e) => handleClick(btn)}
          key={btn.id}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};
export default AppFilter;
