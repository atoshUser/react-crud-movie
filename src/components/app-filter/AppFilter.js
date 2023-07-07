import React, { useState } from "react";
import "./AppFilter.css";
const AppFilter = () => {
  const [activeButton, setActiveButton] = useState(1);
  const buttons = [
    { id: 1, label: "Barcha kinolar" },
    { id: 2, label: "Eng ko'p ko'rilgan kinolar" },
    { id: 3, label: "Eng mashhur kinolar" },
  ];
  const handleClick = (btnId, event) => {
    console.log(event.target.textContent);
    setActiveButton(btnId);
  };
  return (
    <div className="wrapper-btn">
      {buttons.map((btn) => (
        <button
          className={`btn ${activeButton === btn.id ? "active" : ""}`}
          onClick={(e) => handleClick(btn.id, e)}
          key={btn.id}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};
export default AppFilter;
