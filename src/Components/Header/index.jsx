/** @format */

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

function Header() {
  return (
    <div id='header'>
      <CustomNavbar
        expand='lg'
        className='navbar-dark py-3 fixed-top '>
        <Container>
          <Navbar.Brand
            href='#header'
            className='text-white'>
            looplab
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto text-center '>
              <Nav.Link
                href='#header'
                className='text-white'>
                Home
              </Nav.Link>
              <Nav.Link
                href='#explore'
                className='text-white'>
                Explore
              </Nav.Link>
              <Nav.Link
                href='#create'
                className='text-white'>
                Create
              </Nav.Link>
              <Nav.Link
                href='#share'
                className='text-white'>
                Share
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </CustomNavbar>
    </div>
  );
}

export default Header;

const CustomNavbar = styled(Navbar)`
  background-color: rgba(0, 0, 0, 0.4) !important;
  border-bottom: 3px solid blue;
`;
