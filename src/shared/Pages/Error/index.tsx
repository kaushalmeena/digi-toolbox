import { Button } from "@blueprintjs/core";
import Link from "next/link";
import React from "react";
import HeaderSection from "../../HeaderSection";
import { Container } from "./styles";

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
