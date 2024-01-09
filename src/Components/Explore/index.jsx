/** @format */

import React from "react";
import BtnComponent from "../btnComponent";
import HeadingComponent from "../Heading";

function ExploreComponent({
  exploreBackground,
  exploreText,
  btnStyle,
  btnText,
}) {
  return (
    <div className={`${exploreBackground} text-center text-white py-3 `}>
      <HeadingComponent exploreText={exploreText} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        accusantium voluptatum consequatur voluptate laboriosam nesciunt nihil
        reiciendis. Dolorum ad voluptate sunt dolor qui excepturi numquam
        delectus laboriosam, soluta modi. Numquam.
      </p>
      <BtnComponent
        btnStyle={btnStyle}
        btnText={btnText}
      />
    </div>
  );
}

export default ExploreComponent;
