import React from "react";
import Table, { Col, Row, Header } from "./Table";

export default {
  title: "Table"
};

export const withContent = () => (
  <Table>
    <Row>
      <Col>A</Col>
      <Col>B</Col>
    </Row>
    <Row>
      <Col>C</Col>
      <Col>D</Col>
    </Row>
    <Row>
      <Col>E</Col>
      <Col>F</Col>
    </Row>
  </Table>
);

export const withHeader = () => (
  <Table>
    <Row>
      <Header>H1</Header>
      <Header>H2</Header>
    </Row>
    <Row>
      <Col>A</Col>
      <Col>B</Col>
    </Row>
    <Row>
      <Col>C</Col>
      <Col>D</Col>
    </Row>
    <Row>
      <Col>E</Col>
      <Col>F</Col>
    </Row>
  </Table>
);
