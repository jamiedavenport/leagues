import React from "react";
import List, { ListItem } from "./List";
import Input from "./Input";

export default {
  title: "List"
};

export const withItems = () => (
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

export const withInput = () => (
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>
      <Input placeholder="New Item" />
    </ListItem>
  </List>
);
