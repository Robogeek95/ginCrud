import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import MaterialForm from "../components/materialForm";

export default function New() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Row className="mb-4 justify-content-center">
            <Col sm={"auto"}>
              <h2 className="text-center">Kinikan Material</h2>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col sm={6}>
              <MaterialForm data={[{ name: "hello" }]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
