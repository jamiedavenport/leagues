import React from "react";
import Card, { CardBody, CardButton, CardHeader } from "./Card";

export default {
  title: "Card"
};

export const withText = () => (
  <Card>
    <CardBody>Hello, Card</CardBody>
  </Card>
);

export const withHeader = () => (
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>Hello, Card</CardBody>
  </Card>
);

export const withButton = () => (
  <Card>
    <CardBody>Hello, Card</CardBody>
    <CardButton>Call to Action</CardButton>
  </Card>
);

export const withAll = () => (
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>Hello, Card</CardBody>
    <CardButton>Call to Action</CardButton>
  </Card>
);
