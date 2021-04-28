import Head from "next/head";
import React, { FunctionComponent } from "react";
import JSONToXMLPage from "../screens/Tools/JSON/JSONToXML";

const JSONToXML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert JSON to XML Online</title>
      <meta
        key="description"
        name="description"
        content="Convert JSON to XML online easily."
      />
    </Head>
    <JSONToXMLPage />
  </>
);

export default JSONToXML;
