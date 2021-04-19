import React, { FunctionComponent } from "react";
import { H1, H3, Button } from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";

type ErrorPageProps = {
  heading: string;
  subHeading: string;
};

const ErrorPage: FunctionComponent<ErrorPageProps> = (
  props: ErrorPageProps
) => (
  <ErrorContainer>
    <H1>{props.heading}</H1>
    <H3>{props.subHeading}</H3>
    <ButtonContainer>
      <Link href="/">
        <Button large>Go to Home</Button>
      </Link>
    </ButtonContainer>
  </ErrorContainer>
);

export const ErrorContainer = styled.div`
  padding: 20px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div`
  padding: 20px;
`;

export default ErrorPage;
