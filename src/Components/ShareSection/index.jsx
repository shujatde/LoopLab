/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ExploreComponent from "../Explore";
import ImageComponent from "../ImageComponent";
import HeadingComponent from "../Heading";
import Lorem from "../Lorem";
function ShareSection() {
  const path = "/img/share-section1.jpg";
  return (
    <div id='share'>
      <ExploreComponent
        exploreText='Share'
        exploreBackground='bg-primary'
        btnStyle='btn-outline-light btn-lg'
        btnText='find out more'
      />
      <Container>
        <Row className='py-5'>
          <Col
            lg={6}
            md={12}>
            <ImageComponent path={path} />
          </Col>
          <Col
            lg={6}
            md={12}>
            <HeadingComponent exploreText='share that you create' />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga a
              eveniet culpa corrupti maxime quod quo vel impedit deserunt,
              repellat quisquam autem rerum, voluptatum odit non iusto ducimus
              repudiandae repellendus.
            </p>
            <Lorem iconStyle='bg-black text-white' />
            <Lorem iconStyle='bg-black text-white' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShareSection;
