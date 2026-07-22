"use client";

import { Button } from "@blueprintjs/core";
import Link from "next/link";
import HeaderSection from "./HeaderSection";

type ErrorPageProps = {
  heading: string;
  subHeading: string;
};

export default function ErrorPage({ heading, subHeading }: ErrorPageProps) {
  return (
    <div className="text-center">
      <HeaderSection heading={heading} subHeading={subHeading} />
      <Link href="/">
        <Button size="large">Go to Home</Button>
      </Link>
    </div>
  );
}
