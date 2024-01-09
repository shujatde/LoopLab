/** @format */

import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

function Lorem({ iconStyle, textStyle }) {
  return (
    <LoremContainer>
      <Row className='p-4'>
        <Col lg={2}>
          <div
            className={`${iconStyle} fs-1 rounded d-flex justify-content-center align-item-center`}>
            <i className='fa fa-check'></i>
          </div>
        </Col>
        <Col lg={10}>
          <div className={`${textStyle}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit. Saepe fuga quia quisquamSaepe fuga
            quia quisquam nesciunt quod fugiat illum id libero nemo rerum!
          </div>
        </Col>
      </Row>
    </LoremContainer>
  );
}

export default Lorem;
const LoremContainer = styled.div`
  .fs-1 {
    width: 50px;
  }
`;
