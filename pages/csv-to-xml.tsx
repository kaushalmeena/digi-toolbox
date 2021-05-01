import Head from "next/head";
import React, { FunctionComponent } from "react";
import CSVToXMLPage from "../screens/Tools/CSV/CSVToXML";

const CSVToXML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert CSV to XML - Online CSV Tools</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts CSV to XML."
      />
    </Head>
    <CSVToXMLPage />
  </>
);

export default CSVToXML;
