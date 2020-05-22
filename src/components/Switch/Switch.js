import React from "react";
import "./Switch.css";

function Switch(props) {
  return (
    <div className="switch-mode">
      <h3>Dark mode</h3>
      <input className="switch-mode-checkbox" type="checkbox" id="switch" />
      <label className="switch-mode-toggle" htmlFor="switch"></label>
    </div>
  );
}

export default Switch;
