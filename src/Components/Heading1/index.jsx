import React from "react";
function Heading1({ heading1Text, headingStyle }) {
  return <h1 className={`${headingStyle}`}>{heading1Text}</h1>;
}

export default Heading1;
