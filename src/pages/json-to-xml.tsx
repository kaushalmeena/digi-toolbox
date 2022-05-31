import Head from "next/head";
import React from "react";
import JSONToXMLPage from "../screens/Tools/JSON/JSONToXML";

function JSONToXML() {
  return (
    <>
      <Head>
        <title key="title">Convert JSON to XML - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts JSON to XML."
        />
      </Head>
      <JSONToXMLPage />
    </>
  );
}

export default JSONToXML;
