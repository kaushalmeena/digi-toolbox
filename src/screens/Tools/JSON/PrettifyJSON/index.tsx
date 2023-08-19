"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { prettifyJSON } from "./utils";

export default function PrettifyJSONPage() {
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