import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Row, Col, Button, Card, CardColumns } from "react-bootstrap";
import dayjs from "dayjs";
import dumMaterials from "../lib/materials.json";
import axios from "axios";

const stack = [
  {
    tool: "React.js",
    link: "https://reactjs.org",
  },
  {
    tool: "Next.js",
    link: "https://nextjs.org",
  },
  {
    tool: "GoLang",
    link: "reactjs.org",
  },
  {
    tool: "Gin Framework",
    link: "reactjs.org",
  },
  {
    tool: "GOrm",
    link: "reactjs.org",
  },
  {
    tool: "PostgreSql",
    link: "reactjs.org",
  },
];

export default function index(props) {
  let { materials } = props;

  return (
    <div className="container">
      <Head>
        <title>Gin CRUD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Row className="justify-content-center">
          <Col sm="10">
            <div className="row pt-5 justify-content-center">
              <div className="col-auto">
                <h1 className="text-center">My first gin CRUD app</h1>

                <Row className="text-center justify-content-center mt-3">
                  {stack.map((stack) => (
                    <Col key={stack.tool} sm="auto">
                      <a
                        className="bg-light rounded text-muted p-2"
                        href={stack.link}
                        target="new"
                      >
                        <code>{stack.tool}</code>
                      </a>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <Button
                  as="a"
                  className="d-flex align-items-center"
                  href="/new"
                  variant="info"
                  block
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                  <h5 className="m-0 ml-2">Create New Material</h5>
                </Button>
              </div>
            </div>

            <div className="row mt-4">
              {materials.map((material) => (
                <div className="col-6" key={material.name}>
                  <Card
                    bg="light"
                    as="a"
                    href={`/${material.id}`}
                    className={`${styles.matCard}  mt-4`}
                  >
                    <Card.Body>
                      <Card.Title>{material.name}</Card.Title>
                      <Card.Text>by {material.author}</Card.Text>
                      <Card.Text>{material.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        {`Created ${dayjs(material.created).fromNow()}`}
                      </small>
                      <br />
                      <small className="text-muted">
                        {`Last updated ${dayjs(material.updated).fromNow()}`}
                      </small>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = axios
    .get(`http://localhost:8080/api/v1/materials`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
    });

  const materials = await res;

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      materials,
    },
  };
}
