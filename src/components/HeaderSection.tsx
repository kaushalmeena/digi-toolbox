import { H1, H2 } from "@blueprintjs/core";

type HeaderSectionProps = {
  heading: string;
  subHeading: string;
};

export default function HeaderSection({
  heading,
  subHeading
}: HeaderSectionProps) {
  return (
    <div className="p-5 text-center">
      <H1>{heading}</H1>
      <H2>{subHeading}</H2>
    </div>
  );
}
