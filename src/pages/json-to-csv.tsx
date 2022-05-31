import Head from "next/head";
import React from "react";
import JSONToCSVPage from "../screens/Tools/JSON/JSONToCSV";

function JSONToCSV() {
  return (
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
}

export default JSONToCSV;
