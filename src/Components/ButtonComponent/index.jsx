import React from "react";

const ButtonComponent = ({ btnText, btnStyle }) => {
  return <button className={`btn ${btnStyle}`}>{btnText}</button>;
};

export default ButtonComponent;
