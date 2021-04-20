import Head from "next/head";
import React, { FunctionComponent } from "react";
import CaseConverterPage from "../screens/Tools/Text/CaseConverter";

const CaseConverter: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Text Case Converter Online Tool</title>
      <meta
        key="description"
        name="description"
        content="Convert case of text into upper, title, lower, sentence, kebab, flip, constant, pascal, alternating, capital case easily."
      />
    </Head>
    <CaseConverterPage />
  </>
);

export default CaseConverter;
