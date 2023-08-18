'use client';

import DataConvertPage from "@/components/DataConvertPage";
import { minifyJSON } from "./utils";

export default function MinifyJSONPage() {
  return (
    <DataConvertPage
      heading="Minify JSON"
      subHeading="Quickly compress a JSON data"
      fileExtension="json"
      fileType="application/json"
      convertFunction={minifyJSON}
    />
  );
}
