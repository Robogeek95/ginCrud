import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Alert from "react-bootstrap/Alert";
import { Button, Card, CardColumns } from "react-bootstrap";

export default function index() {
  return (
    <div className="container">
      <Head>
        <title>Gin CRUD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
              <code className="bg-light p-2 rounded mr-2 text-muted">Gorm</code>
              <code className="bg-light p-2 rounded mr-2 text-muted">
                MySql
              </code>
            </p>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 rounded p-2 pl-4 bg-light">
            <Button as="a" href="/new" variant="info">
              <h5 className="m-0">Create Material</h5>
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Card href="#">
              <Card.Body>
                <Card.Title>The Oasis</Card.Title>
                <Card.Text>by Akindada</Card.Text>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Created 3 mins ago</small>
                <br />
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div>

          <div className="col-6">
            <Card>
              <Card.Body>
                <Card.Title>The Oasis</Card.Title>
                <Card.Text>by Akindada</Card.Text>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Created 3 mins ago</small>
                <br />
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
