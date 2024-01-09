/** @format */

import React from "react";

function BtnComponent({ btnStyle, btnText }) {
  return (
    <div>
      <button className={`btn ${btnStyle}`}>{btnText}</button>
    </div>
  );
}

export default BtnComponent;
