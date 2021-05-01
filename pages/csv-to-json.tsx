import Head from "next/head";
import React, { FunctionComponent } from "react";
import CSVToJSONPage from "../screens/Tools/CSV/CSVToJSON";

const CSVToJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert CSV to JSON - Online CSV Tools</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts CSV to JSON."
      />
    </Head>
    <CSVToJSONPage />
  </>
);

export default CSVToJSON;
