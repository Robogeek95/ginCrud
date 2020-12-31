import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Row, Col, Button, Card, CardColumns } from "react-bootstrap";

export default function index() {
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

                <p className="text-center mt-3">
                  <span className="mr-2">Stacks Include</span>
                  <code className="bg-light p-2 rounded mr-2 text-muted">
                    React.js
                  </code>
                  <code className="bg-light p-2 rounded mr-2 text-muted">
                    Next.js
                  </code>
                  <code className="bg-light p-2 rounded mr-2 text-muted">
                    GoLang
                  </code>
                  <code className="bg-light p-2 rounded mr-2 text-muted">
                    Gin Framework
                  </code>
                  <code className="bg-light p-2 rounded mr-2 text-muted">
                    Gorm
                  </code>
                  <code className="bg-light p-2 rounded mr-2 text-muted">
                    MySql
                  </code>
                </p>
              </div>
            </div>

            <div className="row my-5">
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
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                  <h5 className="m-0 ml-2">Create New Material</h5>
                </Button>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <Card bg="light" as="a" href="#" className={styles.matCard}>
                  <Card.Body>
                    <Card.Title>The Oasis</Card.Title>
                    <Card.Text>by Akindada</Card.Text>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Created 3 mins ago</small>
                    <br />
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </div>

              <div className="col-6">
                <Card bg="light" as="a" href="#" className={styles.matCard}>
                  <Card.Body>
                    <Card.Title>The Oasis</Card.Title>
                    <Card.Text>by Akindada</Card.Text>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Created 3 mins ago</small>
                    <br />
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}
