import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import MaterialForm from "../components/materialForm";
import dumMaterials from "../lib/materials.json";
import dayjs from "dayjs";
import axios from "axios";

export default function New(props) {
  const { material } = props;

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Row className="mb-4 justify-content-center">
            <Col sm={"auto"}>
              <h2 className="text-center">{material.name}</h2>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col sm={6}>
              <Row className="mb-3">
                <Col>
                  <small className="text-muted">
                    {`Created ${dayjs(material.created).fromNow()}`}
                  </small>
                  <br />
                  <small className="text-muted">
                    {`Last updated ${dayjs(material.updated).fromNow()}`}
                  </small>
                </Col>
              </Row>
              <MaterialForm data={material} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get materials
  const res = axios
    .get(`http://localhost:8080/api/v1/materials`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
    });

  const materials = await res;

  // Get the paths we want to pre-render based on materials
  const paths = materials.map((material) => ({
    params: { materialId: material.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = axios
    .get(`http://localhost:8080/api/v1/materials/${params.materialId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
    });

  const material = await res;

  // Pass post data to the page via props
  return { props: { material } };
}
