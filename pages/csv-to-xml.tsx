import Head from "next/head";
import React, { FunctionComponent } from "react";
import CSVToXMLPage from "../screens/Tools/CSV/CSVToXML";

const CSVToXML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert CSV to XML Online</title>
      <meta
        key="description"
        name="description"
        content="Convert CSV to XML online easily."
      />
    </Head>
    <CSVToXMLPage />
  </>
);

export default CSVToXML;
