import { H1, H2 } from "@blueprintjs/core";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

type HeaderSectionProps = {
  heading: string;
  subHeading: string;
};

export default function HeaderSection({
  heading,
  subHeading
}: HeaderSectionProps) {
  return (
    <Container>
      <H1>{heading}</H1>
      <H2>{subHeading}</H2>
    </Container>
  );
}
