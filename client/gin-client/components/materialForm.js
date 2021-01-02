import React, { useState } from "react";
import { Row, Container, Button, Form, Col } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";

export default function MaterialForm(props) {
  let data = {
    name: "",
    pages: 0,
    published: "",
    author: "",
    desc: "",
    rating: 0,
  };

  if (props.data) {
    data = props.data;
  }

  const confirmDelete = (e) => {
    window.alert("are you sure?");
  };

  const formik = useFormik({
    initialValues: {
      name: data.name,
      pages: data.pages,
      published: data.published,
      author: data.author,
      desc: data.description,
      rating: data.rating,
    },
    onSubmit: async (values) => {
      axios
        .post(`http://localhost:8080/api/v1/materials/`, values)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="material Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Pages</Form.Label>
          <Form.Control
            type="number"
            placeholder="How many pages"
            name="pages"
            onChange={formik.handleChange}
            value={formik.values.pages}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Star Rating</Form.Label>
          <Form.Control
            as="select"
            name="rating"
            onChange={formik.handleChange}
            value={formik.values.rating}
          >
            <option value={0}>Choose...</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Publish Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="publication date"
            name="published"
            onChange={formik.handleChange}
            value={formik.values.published}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Author</Form.Label>
        <Form.Control
          placeholder="Author's Name"
          name="author"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="desc"
          onChange={formik.handleChange}
          value={formik.values.desc}
        />
      </Form.Group>

      {data ? (
        <Row>
          <Col>
            <Button
              variant="info"
              className="mt-3"
              onClick={updateData}
              block
              type="submit"
            >
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
