import React from "react";
import Input from "./Input";

export default {
  title: "Input"
};

export const withNothing = () => <Input type="text" />;

export const withPlaceholder = () => (
  <Input type="text" placeholder="Manchester" />
);

export const withValue = () => <Input type="text" value="Manchester" />;
