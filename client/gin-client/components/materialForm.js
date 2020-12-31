import React from "react";
import { Row, Container, Button, Form, Col } from "react-bootstrap";

export default function MaterialForm(props) {
  let data = props.data;

  const submitForm = (e) => {
    e.preventDefault();

    console.log(e);
  };

  const confirmDelete = (e) => {
    window.alert("are you sure?");
  };

  return (
    <Form onSubmit={submitForm}>
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="material Name" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Publish Date</Form.Label>
          <Form.Control type="date" placeholder="publication date" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Pages</Form.Label>
          <Form.Control type="number" placeholder="How many pages" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Author</Form.Label>
        <Form.Control placeholder="Author's Name" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Pages</Form.Label>
          <Form.Control type="number" placeholder="number of pages" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Star Rating</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      {data ? (
        <Row>
          <Col>
            <Button variant="info" className="mt-3" block type="submit">
              Save
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              className="mt-3"
              block
              onClick={confirmDelete}
            >
              Delete
            </Button>
          </Col>
        </Row>
      ) : (
        <Button variant="info" className="mt-3" block type="submit">
          Submit
        </Button>
      )}
    </Form>
  );
}
