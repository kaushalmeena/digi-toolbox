import Head from "next/head";
import React, { FunctionComponent } from "react";
import JSONToCSVPage from "../screens/Tools/JSON/JSONToCSV";

const JSONToCSV: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert JSON to CSV Online</title>
      <meta
        key="description"
        name="description"
        content="Convert JSON to CSV online easily."
      />
    </Head>
    <JSONToCSVPage />
  </>
);

export default JSONToCSV;
