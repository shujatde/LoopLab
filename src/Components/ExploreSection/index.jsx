/** @format */

import React from "react";
import ExploreComponent from "../Explore";
import ImageComponent from "../ImageComponent";
import HeadingComponent from "../Heading";
import { Col, Container, Row } from "react-bootstrap";
import Lorem from "../Lorem";

function ExploreSection() {
  const path = "/img/explore-section1.jpg";
  return (
    <div id='explore'>
      <ExploreComponent
        exploreBackground='bg-dark'
        exploreText='Explore'
        btnStyle='btn-outline-secondary btn-lg'
        btnText='Secondary'
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
            <HeadingComponent exploreText='explore and connect' />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga a
              eveniet culpa corrupti maxime quod quo vel impedit deserunt,
              repellat quisquam autem rerum, voluptatum odit non iusto ducimus
              repudiandae repellendus.
            </p>
            <Lorem iconStyle='text-white bg-dark' />
            <Lorem iconStyle='text-white bg-dark' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ExploreSection;
