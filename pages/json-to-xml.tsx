import Head from "next/head";
import React, { FunctionComponent } from "react";
import JSONToXMLPage from "../screens/Tools/JSON/JSONToXML";

const JSONToXML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert JSON to XML - Online JSON Tools</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts JSON to XML."
      />
    </Head>
    <JSONToXMLPage />
  </>
);

export default JSONToXML;
