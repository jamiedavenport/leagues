import React from "react";
import Panels, { Panel } from "./Panels";

export default {
  title: "Panels"
};

export const withText = () => (
  <Panels>
    <Panel>Panel 1</Panel>
    <Panel>Panel 2</Panel>
  </Panels>
);
