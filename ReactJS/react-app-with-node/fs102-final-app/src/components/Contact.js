import React from "react";
import { Container, Form, Col, Button } from "react-bootstrap";

const Contact = () => {
  const alignstyle = { textAlign: "left" };
  return (
    <Container style={alignstyle}>
      <br />
      <h1>Contact Us</h1>
      <p>If you have any feedback for improvements, please let us know!</p>
      <br />
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridfName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="John" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridlName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Doe" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formTextArea">
          <Form.Label>Feedback</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <br />
      <br />
    </Container>
  );
};
export default Contact;
