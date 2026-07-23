"use client";

import { Button, NonIdealState } from "@blueprintjs/core";
import { HomeIcon, PathSearchIcon } from "@blueprintjs/icons";
import Link from "next/link";

export default function ErrorFallback({
  heading,
  subHeading
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <NonIdealState
      className="py-16"
      icon={<PathSearchIcon />}
      title={heading}
      description={subHeading}
      action={
        <Link href="/">
          <Button variant="minimal" intent="primary" icon={<HomeIcon />}>
            Back to home
          </Button>
        </Link>
      }
    />
  );
}
