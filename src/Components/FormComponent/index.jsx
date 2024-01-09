import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

function FormComponent() {
  return (
    <FormStyle>
      <Form className="bg-primary py-4 px-3 text-danger text-white text-center  rounded">
        <h2>Sign Up Today</h2>
        <h3>Please fill out this form to register</h3>
        <Form.Control
          className="mb-3"
          name="username"
          type="text"
          placeholder="User Name"
          required
        />
        <Form.Control
          className="mb-3"
          name="email"
          type="email"
          placeholder="email"
          required
        />
        <Form.Control
          className="mb-3"
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <Form.Control
          className="mb-3"
          name="conformPassword"
          type="password"
          placeholder="Conform Password"
          required
        />
        <Button className="w-100 btn-outline-light" type="submit">
          Submit
        </Button>
      </Form>
    </FormStyle>
  );
}

export default FormComponent;

const FormStyle = styled.div`
  h2 {
  }
`;
