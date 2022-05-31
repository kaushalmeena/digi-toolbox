import Head from "next/head";
import React from "react";
import CSVToYAMLPage from "../screens/Tools/CSV/CSVToYAML";

function CSVToYAML() {
  return (
    <>
      <Head>
        <title key="title">Convert CSV to YAML - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts CSV to YAML."
        />
      </Head>
      <CSVToYAMLPage />
    </>
  );
}

export default CSVToYAML;
