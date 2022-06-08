import { H1, H2 } from "@blueprintjs/core";
import React from "react";
import { TopContainer } from "../../../../styles";
import MainSection from "./MainSection";

function DiffChecker() {
  return (
    <>
      <TopContainer>
        <H1>Diff-Checker</H1>
        <H2>Quickly compare two set of text to find differences</H2>
      </TopContainer>
      <MainSection />
    </>
  );
}

export default DiffChecker;
