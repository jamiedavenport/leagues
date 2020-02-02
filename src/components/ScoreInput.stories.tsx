import React from "react";
import ScoreInput from "./ScoreInput";

export default {
  title: "ScoreInput"
};

export const withPlaceholder = () => <ScoreInput placeholder="2" />;
export const withText = () => <ScoreInput value="2" />;
