/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Lorem from "../Lorem";
import FormComponent from "../Form";

function HeroSection() {
  return (
    <HeroContainer>
      <Row className='mt-5 pb-4'>
        <Col
          lg={8}
          className='d-none d-lg-block'>
          <h1>
            Build
            <span> social profiles </span> and gain revenue and
            <span> profits </span>
          </h1>
          <Lorem
            iconStyle='bg-white text-primary'
            textStyle='text-white'
          />
          <Lorem
            iconStyle='bg-white text-primary'
            textStyle='text-white'
          />
          <Lorem
            iconStyle='bg-white text-primary'
            textStyle='text-white'
          />
        </Col>
        <Col
          lg={4}
          md={12}>
          <FormComponent></FormComponent>
        </Col>
      </Row>
    </HeroContainer>
  );
}

export default HeroSection;
const HeroContainer = styled(Container)`
  padding-top: 72px;
  h1 {
    font-weight: 300;
    font-size: 3rem;
    color: white;
    span {
      font-weight: 400;
    }
  }
`;
