"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { prettifyJSON } from "./utils";

function PrettifyJSONPage() {
  return (
    <DataConvertPage
      heading="Prettify JSON"
      subHeading="Quickly beautify a JSON data structure"
      fileExtension="json"
      fileType="application/json"
      convertFunction={prettifyJSON}
    />
  );
}

export default PrettifyJSONPage;
