/** @format */

import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function FormComponent() {
  return (
    <div>
      <Form className='bg-primary py-5 text-center rounded'>
        <Container>
          <h2>Sign Up Today</h2>
          <h4>please fill out this form to register</h4>

          <Form.Control
            type='text'
            placeholder='username'
            className='mb-3'
            name='username'
            required
          />

          <Form.Control
            type='email'
            placeholder='Enter email'
            className='mb-3'
            name='email'
            required
          />

          <Form.Control
            type='password'
            placeholder='Password'
            className='mb-3'
            name='password'
            required
          />

          <Form.Control
            type='password'
            placeholder='conform password'
            className='mb-3'
            name='conformPassword'
            required
          />

          <Button
            className='btn btn-outline-light w-100'
            type='submit'>
            Submit
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default FormComponent;
