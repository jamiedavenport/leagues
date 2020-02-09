import React from "react";
import ScoreInput from "./ScoreInput";

export default {
  title: "ScoreInput"
};

export const withPlaceholder = () => <ScoreInput placeholder="-" />;
export const withText = () => <ScoreInput value="2" />;
