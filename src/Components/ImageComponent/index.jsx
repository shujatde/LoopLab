/** @format */

import React from "react";

function ImageComponent(props) {
  const { path } = props;
  return (
    <div>
      <img
        src={path}
        alt='Explore Images'
        className='rounded-circle img-fluid'
      />
    </div>
  );
}

export default ImageComponent;
