/** @format */

import React from "react";
function HeadingComponent({ exploreText, exploreStyle }) {
  return (
    <div>
      <h2 className={`fs-1 ${exploreStyle}`}>{exploreText}</h2>
    </div>
  );
}
export default HeadingComponent;
