import Head from "next/head";
import React, { FunctionComponent } from "react";
import CSVToYAMLPage from "../screens/Tools/CSV/CSVToYAML";

const CSVToYAML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert CSV to YAML Online</title>
      <meta
        key="description"
        name="description"
        content="Convert CSV to YAML online easily."
      />
    </Head>
    <CSVToYAMLPage />
  </>
);

export default CSVToYAML;
