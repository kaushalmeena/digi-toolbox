import Head from "next/head";
import React, { FunctionComponent } from "react";
import XMLToCSVPage from "../screens/Tools/XML/XMLToCSV";

const XMLToCSV: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert XML to CSV Online</title>
      <meta
        key="description"
        name="description"
        content="Convert XML to CSV online easily."
      />
    </Head>
    <XMLToCSVPage />
  </>
);

export default XMLToCSV;
