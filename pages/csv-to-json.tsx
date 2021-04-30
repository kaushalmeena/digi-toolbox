import Head from "next/head";
import React, { FunctionComponent } from "react";
import CSVToJSONPage from "../screens/Tools/CSV/CSVToJSON";

const CSVToJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert CSV to JSON Online</title>
      <meta
        key="description"
        name="description"
        content="Convert CSV to JSON online easily."
      />
    </Head>
    <CSVToJSONPage />
  </>
);

export default CSVToJSON;
