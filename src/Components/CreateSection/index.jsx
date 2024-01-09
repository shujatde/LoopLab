/** @format */

import React from "react";
import ExploreComponent from "../Explore";
import ImageComponent from "../ImageComponent";
import { Container, Row, Col } from "react-bootstrap";
import HeadingComponent from "../Heading";
import Lorem from "../Lorem";

function CreateSection() {
  const path = "/img/create-section1.jpg";
  return (
    <div
      className='bg-dark'
      id='create'>
      <ExploreComponent
        exploreBackground='bg-primary'
        exploreText='Create'
        btnStyle='btn-outline-light btn-lg'
        btnText='Secondary'
      />
      <Container>
        <Row className='py-5 text-white'>
          <Col
            lg={6}
            md={12}>
            <HeadingComponent exploreText='Create your passion' />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga a
              eveniet culpa corrupti maxime quod quo vel impedit deserunt,
              repellat quisquam autem rerum, voluptatum odit non iusto ducimus
              repudiandae repellendus.
            </p>
            <Lorem iconStyle='bg-black' />
            <Lorem iconStyle='bg-black' />
          </Col>
          <Col
            lg={6}
            md={12}>
            <ImageComponent path={path} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateSection;
