import Head from "next/head";
import React, { FunctionComponent } from "react";
import JSONToCSVPage from "../screens/Tools/JSON/JSONToCSV";

const JSONToCSV: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">
        GetThatTool - One place for all the tool you could want
      </title>
      <meta
        key="description"
        name="description"
        content="GetThatTool is webapp that lets you have all common tools like, text diff, convertors, calculators at one place."
      />
    </Head>
    <JSONToCSVPage />
  </>
);

export default JSONToCSV;
