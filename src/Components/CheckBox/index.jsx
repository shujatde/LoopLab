import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

function CheckBox({ LoremStyle, loremTextStyle }) {
  return (
    <CheckBoxStyle>
      <Row>
        <Col lg={2}>
          <div
            className={`${LoremStyle} checkBox fs-1 rounded d-flex justify-content-center  align-item-center`}
          >
            <i class="fa fa-check"></i>
          </div>
        </Col>
        <Col lg={10}>
          <p className={`${loremTextStyle} `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit. Saepe fuga quia quisquamSaepe fuga
            quia quisquam nesciunt quod fugiat illum id libero nemo rerum!
          </p>
        </Col>
      </Row>
    </CheckBoxStyle>
  );
}

export default CheckBox;
export const CheckBoxStyle = styled.div`
  .checkBox {
    width: 50px;
    height: 40px;
    margin: 0.4em 0.3em;
  }
`;
