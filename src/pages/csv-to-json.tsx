import Head from "next/head";
import React from "react";
import CSVToJSONPage from "../screens/Tools/CSV/CSVToJSON";

function CSVToJSON() {
  return (
    <>
      <Head>
        <title key="title">Convert CSV to JSON - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts CSV to JSON."
        />
      </Head>
      <CSVToJSONPage />
    </>
  );
}

export default CSVToJSON;
