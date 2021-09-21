import Head from "next/head";
import React, { FunctionComponent } from "react";
import PrettifyXMLPage from "../screens/Tools/XML/PrettifyXML";

const PrettifyXML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Prettify XML - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that prettifies XML."
      />
    </Head>
    <PrettifyXMLPage />
  </>
);

export default PrettifyXML;
