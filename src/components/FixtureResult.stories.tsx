import React from "react";
import FixtureResult from "./FixtureResult";

export default {
  title: "FixtureResult"
};

export const withPlaceholders = () => (
  <FixtureResult
    fixture={{
      homeTeam: "Doncaster",
      awayTeam: "Leeds"
    }}
    onChange={() => {}}
  />
);

export const withMultiple = () => (
  <div>
    <FixtureResult
      fixture={{
        homeTeam: "Manchester",
        awayTeam: "Leeds"
      }}
      onChange={() => {}}
    />

    <FixtureResult
      fixture={{
        homeTeam: "Doncaster",
        awayTeam: "Leeds"
      }}
      onChange={() => {}}
    />
  </div>
);
