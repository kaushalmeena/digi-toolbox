"use client";

import { Button } from "@blueprintjs/core";
import Link from "next/link";
import HeaderSection from "./HeaderSection";

export default function ErrorFallback({
  heading,
  subHeading
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div className="text-center">
      <HeaderSection heading={heading} subHeading={subHeading} />
      <Link href="/">
        <Button size="large">Go to Home</Button>
      </Link>
    </div>
  );
}
