import Head from "next/head";
import React, { FunctionComponent } from "react";
import JSONToCSVPage from "../screens/Tools/JSON/JSONToCSV";

const JSONToCSV: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert JSON to CSV - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts JSON to CSV."
      />
    </Head>
    <JSONToCSVPage />
  </>
);

export default JSONToCSV;
