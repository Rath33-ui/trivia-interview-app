import React from "react";

function Popup({children}) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        {children}
      </div>
    </div>
  );
}

export default Popup;
