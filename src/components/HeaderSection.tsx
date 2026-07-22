import { H1, H2 } from "@blueprintjs/core";

export default function HeaderSection({
  heading,
  subHeading
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div className="p-5 text-center">
      <H1>{heading}</H1>
      <H2>{subHeading}</H2>
    </div>
  );
}
