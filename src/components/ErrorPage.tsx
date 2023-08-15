"use client"

import { Button } from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";

const Container = styled.div`
  text-align: center;
`;

type ErrorPageProps = {
  heading: string;
  subHeading: string;
};

function ErrorPage({ heading, subHeading }: ErrorPageProps) {
  return (
    <Container>
      <HeaderSection heading={heading} subHeading={subHeading} />
      <Link href="/">
        <Button large>Go to Home</Button>
      </Link>
    </Container>
  );
}

export default ErrorPage;