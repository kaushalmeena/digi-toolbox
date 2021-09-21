import Head from "next/head";
import React, { FunctionComponent } from "react";
import XMLToCSVPage from "../screens/Tools/XML/XMLToCSV";

const XMLToCSV: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert XML to CSV - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts XML to CSV."
      />
    </Head>
    <XMLToCSVPage />
  </>
);

export default XMLToCSV;
