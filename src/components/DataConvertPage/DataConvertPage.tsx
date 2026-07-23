import HeaderSection from "../HeaderSection";
import ConvertSection from "./ConvertSection";

export default function DataConvertPage({
  heading,
  subHeading,
  fileExtension,
  fileType,
  switchURL,
  convertFunction
}: {
  heading: string;
  subHeading: string;
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  convertFunction: (input: string) => string;
}) {
  return (
    <>
      <HeaderSection heading={heading} subHeading={subHeading} />
      <ConvertSection
        fileExtension={fileExtension}
        fileType={fileType}
        switchURL={switchURL}
        convertFunction={convertFunction}
      />
    </>
  );
}
