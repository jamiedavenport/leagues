import React from "react";
import Page from "./Page";
import Panels, { Panel } from "./Panels";

export default {
  title: "Page"
};

export const withText = () => <Page>Hello Page</Page>;

export const withPanels = () => (
  <Page>
    <Panels>
      <Panel>Panel 1</Panel>
      <Panel>Panel 2</Panel>
    </Panels>
  </Page>
);
