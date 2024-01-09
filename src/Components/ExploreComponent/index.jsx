import React from "react";
import ButtonComponent from "../ButtonComponent";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Heading1 from "../Heading1";

function ExploreComponent({
  heading1Text,
  headingStyle,
  btnText,
  btnStyle,
  bg,
}) {
  return (
    <ExploreStyle className={bg}>
      <Container>
        <Heading1 heading1Text={heading1Text} headingStyle={headingStyle} />
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          accusantium voluptatum consequatur voluptate laboriosam nesciunt nihil
          reiciendis. Dolorum ad voluptate sunt dolor qui excepturi numquam
          delectus laboriosam, soluta modi. Numquam.
        </p>
        <ButtonComponent btnText={btnText} btnStyle={btnStyle} />
      </Container>
    </ExploreStyle>
  );
}

export default ExploreComponent;
const ExploreStyle = styled.div`
  text-align: center;
`;
