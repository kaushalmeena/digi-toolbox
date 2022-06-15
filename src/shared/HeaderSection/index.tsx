import { H1, H2 } from "@blueprintjs/core";
import React from "react";
import { TopContainer } from "./styles";

type HeaderSectionProps = {
  heading: string;
  subHeading: string;
};

function HeaderSection({ heading, subHeading }: HeaderSectionProps) {
  return (
    <TopContainer>
      <H1>{heading}</H1>
      <H2>{subHeading}</H2>
    </TopContainer>
  );
}

export default HeaderSection;
