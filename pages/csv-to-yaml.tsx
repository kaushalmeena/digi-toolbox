import Head from "next/head";
import React, { FunctionComponent } from "react";
import CSVToYAMLPage from "../screens/Tools/CSV/CSVToYAML";

const CSVToYAML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert CSV to YAML - Online CSV Tools</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts CSV to YAML."
      />
    </Head>
    <CSVToYAMLPage />
  </>
);

export default CSVToYAML;
