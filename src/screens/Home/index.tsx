import React from "react";
import HeaderSection from "../../shared/HeaderSection";
import MainSection from "./MainSection";

function Home() {
  return (
    <>
      <HeaderSection
        heading="GetThatTool"
        subHeading="Every common tool you need to use, at your fingertips!"
      />
      <MainSection />
    </>
  );
}

export default Home;
