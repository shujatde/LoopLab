/** @format */

import React from "react";
import ExploreComponent from "../Explore";
import { Container } from "react-bootstrap";
import BtnComponent from "../btnComponent";

function FooterComponent() {
  return (
    <div className='bg-dark text-center text-white'>
      <Container className='py-3'>
        <h2 className='fs-1'>looplab</h2>
        <p>copyright © 2020</p>
        <BtnComponent
          btnStyle='btn-primary border'
          btnText='Contact Us'
        />
      </Container>
    </div>
  );
}

export default FooterComponent;
