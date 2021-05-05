import { Button, H1, H3 } from "@blueprintjs/core";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { ButtonContainer, Container } from "./styles";

type ErrorPageProps = {
  heading: string;
  subHeading: string;
};

const ErrorPage: FunctionComponent<ErrorPageProps> = (
  props: ErrorPageProps
) => (
  <Container>
    <H1>{props.heading}</H1>
    <H3>{props.subHeading}</H3>
    <ButtonContainer>
      <Link href="/">
        <Button large>Go to Home</Button>
      </Link>
    </ButtonContainer>
  </Container>
);

export default ErrorPage;
