import { H1, H2 } from "@blueprintjs/core";
import React from "react";
import { TopContainer } from "../../styles";
import MainSection from "./MainSection";

function Home() {
  return (
    <>
      <TopContainer>
        <H1>Every tool you could want at one place</H1>
        <H2>Every tool you need to use, at your fingertips!</H2>
      </TopContainer>
      <MainSection />
    </>
  );
}

export default Home;
